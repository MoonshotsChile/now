const Fintoc = require('fintoc');
const axios = require('axios');
const client = new Fintoc('sk_live_xdsA2pD7HkGUbYJsvwazcpxzrUUyzxMV');

/*
client.getLink('V2byLzviMRKL0Wnw_token_RxFJCu_7KwD7UCmhHMuPxzy_')
  .then((link) => link.find({ type_: 'checking_account' }))
  .then((account) => account.getMovements({ since: '2020-01-01' }))
  .then(console.log)
  .catch(console.log);
*/
/*
  client.getLink('V2byLzviMRKL0Wnw_token_RxFJCu_7KwD7UCmhHMuPxzy_')
  .then((link) => link.find({ type_: 'checking_account' }))
  .then((account) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return account.getMovements({ since: yesterday });
  })
  .then(console.log)
  .catch(console.log);

  */

  /*

 client.getLink('V2byLzviMRKL0Wnw_token_RxFJCu_7KwD7UCmhHMuPxzy_')
 .then((link) => link.showAccounts())
 .catch(console.log);
*/

/*

 client.getLink('V2byLzviMRKL0Wnw_token_RxFJCu_7KwD7UCmhHMuPxzy_')
  .then((link) => {
    link.accounts.forEach((account) => {
      console.log(account);
    });
  })
  .catch(console.log);

*/

/*

  client.getLink('V2byLzviMRKL0Wnw_token_RxFJCu_7KwD7UCmhHMuPxzy_')
  .then((link) => link.find({ type_: 'checking_account' }))
  .then((account) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return account.getMovements({ since: yesterday });
  })
  .then(console.log)
  .catch(console.log);

  */


 async function makeGetRequest() {

    /*

    let res = await axios.get('https://api.fintoc.com/v1/accounts/xJw0oZzTv9Gob6X7/movements?link_token=V2byLzviMRKL0Wnw_token_RxFJCu_7KwD7UCmhHMuPxzy_');
  
    let data = res.data;
    console.log(data);
    
    */
    const config = {
        method: 'get',
        url: 'https://api.fintoc.com/v1/accounts/xJw0oZzTv9Gob6X7/movements?link_token=V2byLzviMRKL0Wnw_token_RxFJCu_7KwD7UCmhHMuPxzy_',
        headers: { 'Authorization': 'sk_live_xdsA2pD7HkGUbYJsvwazcpxzrUUyzxMV' }
    }

    let res = await axios(config)

  //  console.log(res.request._header);

    let data = res.data;
    console.log(data);
  }
  
  makeGetRequest();