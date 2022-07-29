const { mnemonic, secret, password, email } = require('./faucet.json');
const { alice } = require('./scripts/sandbox/accounts');

module.exports = {
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  networks: {
    development: {
      host: "http://localhost",
      port: 20000,
      network_id: "*",
      secretKey: alice.sk,
      type: "tezos"
    },
    ghostnet: {
      host: 'https://rpc.ghostnet.teztnets.xyz',
      port: 8732, //172.15.67.251.55983',
      network_id: '*',
      secret,
      mnemonic : [
        "still",
            "another",
            "hurdle",
            "refuse",
            "sauce",
            "march",
            "vicious",
            "ability",
            "trial",
            "cream",
            "joke",
            "pill"
      ],
      password : "Temple21#",
      email : "ozajatin9309@gmail.com",
      type: 'tezos',
    },

  }
};
