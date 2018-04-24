const { getTorrents } = require('../libs/NexusPHP-utils')
module.exports = {
  getTorrents,
  downloadUrl (useIpv6 = false) {
    return (id, passkey) => `https://tp.m-team.cc/download.php?id=${id}&passkey=${passkey}&https=1${useIpv6 ? '&ipv6=1' : ''}`
  }
}