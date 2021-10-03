module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    await deploy('KawaiiYatsura', {
      from: deployer,
      args: ['KawaiiYatsura', 'KY', "https://ipfs.io/ipfs/QmVWcD2MSZcKRcaFpmVAbBqz7sw8eMpTFDyjt8ugZzGxwa/"] ,
      log: true,
    });
  };
  module.exports.tags = ['KawaiiYatsura'];