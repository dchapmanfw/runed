const RunEd = artifacts.require('RunEd');
//const RunEd = artifacts.require('LoveMyNBAJams');

const truffleAssert = require('truffle-assertions');

contract('RunEd: test base logic of contract', (accounts) => {
    const [deployerAddress, tokenHolderOneAddress, tokenHolderTwoAddress, tokenHolderThreeAddress,
           tokenHolderFourAddress, tokenHolderFiveAddress, tokenHolderSixAddress] = accounts;

    it('is possible to devmint tokens only for the owner role', async () => {
        let token = await RunEd.deployed();
        await truffleAssert.fails(token.devMint(3, { from: tokenHolderOneAddress }) );
        await truffleAssert.passes(token.devMint(3, { from: deployerAddress }) );
    });

    it('is not possible to devmint more tokens then set aside for devs', async () => {
        let token = await RunEd.deployed();
        await truffleAssert.fails(token.devMint(96, { from: deployerAddress }) );
    });

    it('is not possible for normie to set mint time and key ', async () => {
        const key = 12345;
        let timesalestart = Math.round(Date.now() / 1000);
        let token = await RunEd.deployed();
        await truffleAssert.fails(token.setPublicSaleKey(key, { from: tokenHolderOneAddress }), "VM Exception while processing transaction: revert Ownable: caller is not the owner"," caller is not the owner.");
        await truffleAssert.fails(token.setupSaleInfo(web3.utils.toWei('.12', 'ether'),
                                                       web3.utils.toWei('.12', 'ether'),
                                                       timesalestart, 
                                                       { from: tokenHolderOneAddress }), "VM Exception while processing transaction: revert Ownable: caller is not the owner","caller is not the owner.");
    });

    it('is only possible to Public mint with time AND key AND the right amount of ETH', async () => {
        let token = await RunEd.deployed();
        const key = 12345;
        // this is a potential bug area if the key defaults to zero. 
        // Setting the time before key is dangerous.
        // To fix this we could add a key_set_ flag and not allow this function to work without it
        await truffleAssert.fails(token.publicSaleMint(2, 0, { from: tokenHolderOneAddress }) );
        // set key and mint 
        await truffleAssert.passes(token.setPublicSaleKey(key, { from: deployerAddress }));
        await truffleAssert.fails(token.publicSaleMint(3, key, { from: tokenHolderOneAddress }) );
        // set up mint time for 3 seconds from now
        let timesalestart = Math.round(Date.now() / 1000) + 3;
        await truffleAssert.passes(token.setupSaleInfo(web3.utils.toWei('.12', 'ether'),web3.utils.toWei('.12', 'ether'),timesalestart, { from: deployerAddress }));
        // Immediatly try to mint with key
        await truffleAssert.fails(token.publicSaleMint(3, key, { from: tokenHolderOneAddress,
                                                                 value: web3.utils.toWei('.12', 'ether') 
                                                                }), "VM Exception while processing transaction"," public sale has not begun yet." );
        // wait for 4 seconds and try again
        await new Promise((res) => {
            setTimeout(res, 4000);
        });
        // fails because we are not sending with eth
        await truffleAssert.fails(token.publicSaleMint(3, key, { from: tokenHolderOneAddress 
                                                                }), "VM Exception while processing transaction"," Need to send more ETH.." );
        // fails because we are not sending enough eth 
        await truffleAssert.fails(token.publicSaleMint(3, key, { from: tokenHolderOneAddress,
                                                                 value: web3.utils.toWei('.1', 'ether') 
                                                                }), "VM Exception while processing transaction"," Need to send more ETH.."  );
        // Passes because we send enough eth
        await truffleAssert.passes(token.publicSaleMint(3, key, { from: tokenHolderOneAddress,
                                                                  value: web3.utils.toWei('.36', 'ether') 
                                                                }));
    });

    it('is not possible to public sale mint over batchsize', async () => {
        let token = await RunEd.deployed();
        let timesalestart = Math.round(Date.now() / 1000);
        const key = 12345;
        // set up key and public sale time
        await truffleAssert.passes(token.setPublicSaleKey(key, { from: deployerAddress }));
        await truffleAssert.passes(token.setupSaleInfo(web3.utils.toWei('.12', 'ether'),web3.utils.toWei('.12', 'ether'),timesalestart, { from: deployerAddress }));
        await new Promise((res) => {
            setTimeout(res, 1000);
        });
        await truffleAssert.fails(token.publicSaleMint(5, key, { from: tokenHolderOneAddress,
                                                                 value: web3.utils.toWei('10', 'ether') 
                                                                }),"VM Exception while processing transaction"," can not mint this many.");
    });
    
    it('is not possible to do individual mints over batch size one at a time', async () => {
        let token = await RunEd.deployed();
        let timesalestart = Math.round(Date.now() / 1000);
        const key = 12345;
        // set up key and public sale time
        await truffleAssert.passes(token.setPublicSaleKey(key, { from: deployerAddress }));
        await truffleAssert.passes(token.setupSaleInfo(web3.utils.toWei('.12', 'ether'),web3.utils.toWei('.12', 'ether'),timesalestart, { from: deployerAddress }));
        await new Promise((res) => {
            setTimeout(res, 1000);
        });
        // mint 4 times in a row
        await truffleAssert.passes(token.publicSaleMint(1, key, { from: tokenHolderTwoAddress,
            value: web3.utils.toWei('.12', 'ether')}));
        await truffleAssert.passes(token.publicSaleMint(1, key, { from: tokenHolderTwoAddress,
        value: web3.utils.toWei('.12', 'ether')}));
        await truffleAssert.passes(token.publicSaleMint(1, key, { from: tokenHolderTwoAddress,
        value: web3.utils.toWei('.12', 'ether')}));
        // fourth mint fails because over batch size
        await truffleAssert.fails(token.publicSaleMint(1, key, { from: tokenHolderTwoAddress,
        value: web3.utils.toWei('.12', 'ether') 
        }),"VM Exception while processing transaction"," can not mint this many.");
    });

    it('is not possible to do allow mint without being on waitlist', async () => {
        let timesalestart = Math.round(Date.now() / 1000);
        let token = await RunEd.deployed();
        // waitlist not set up yet (fails either because not on allow list OR not eligable for mint)
        await truffleAssert.fails(token.allowlistMint(1, { from: tokenHolderFourAddress,
            value: web3.utils.toWei('.36', 'ether')}));
        // set allow list price
        await truffleAssert.passes(token.setupSaleInfo(web3.utils.toWei('.12', 'ether'),web3.utils.toWei('.12', 'ether'),timesalestart, { from: deployerAddress }));
        await new Promise((res) => {
            setTimeout(res, 1000);
        });
        // not on allow list
        await truffleAssert.fails(token.allowlistMint(1, { from: tokenHolderFourAddress,
            value: web3.utils.toWei('.36', 'ether')}),"VM Exception while processing transaction","not eligible for allowlist mint" );
        
        // seed the allow list
        let allow_list_addresses = [tokenHolderFourAddress, tokenHolderFiveAddress, tokenHolderSixAddress]
        let allow_list_amounts = [3, 3, 3]
        await truffleAssert.passes(token.seedAllowlist(allow_list_addresses,allow_list_amounts,{ from: deployerAddress }));
        // mints 1
        await truffleAssert.passes(token.allowlistMint(1, { from: tokenHolderFourAddress,
            value: web3.utils.toWei('.12', 'ether')}));
        // another 1
        await truffleAssert.passes(token.allowlistMint(1, { from: tokenHolderFourAddress,
            value: web3.utils.toWei('.12', 'ether')}));
        // can't do 2 more
        await truffleAssert.fails(token.allowlistMint(2, { from: tokenHolderFourAddress,
            value: web3.utils.toWei('.24', 'ether')}),"VM Exception while processing transaction", "minting quantity exceeded max per wallet");
        // another 1
        await truffleAssert.passes(token.allowlistMint(1, { from: tokenHolderFourAddress,
            value: web3.utils.toWei('.12', 'ether')}));
        // should be able to mint 2
        await truffleAssert.passes(token.allowlistMint(2, { from: tokenHolderFiveAddress,
            value: web3.utils.toWei('.24', 'ether')}));
        // and one more
        await truffleAssert.passes(token.allowlistMint(1, { from: tokenHolderFiveAddress,
            value: web3.utils.toWei('.12', 'ether')}));
        // should not be able to mint 4
        await truffleAssert.fails(token.allowlistMint(4, { from: tokenHolderSixAddress,
            value: web3.utils.toWei('.48', 'ether')}),"VM Exception while processing transaction", "minting quantity exceeded max per wallet");
        // should be able to mint 3
        await truffleAssert.passes(token.allowlistMint(3, { from: tokenHolderSixAddress,
            value: web3.utils.toWei('.36', 'ether')}));
        
    });

    it('is not possible to withdraw unless owner', async () => {
        let token = await RunEd.deployed();
        // set allow list price
        await truffleAssert.fails(token.withdrawMoney({ from: tokenHolderThreeAddress }),
                                                        "VM Exception while processing transaction","caller is not the owner");
        await truffleAssert.passes(token.withdrawMoney({ from: deployerAddress }));
    });

});