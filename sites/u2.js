const { getId } = require('../libs/NexusPHP-utils')
module.exports = {
  getId,
  downloadUrl () {
    return (id, passkey) => `https://u2.dmhy.org/download.php?id=${id}&passkey=${passkey}&https=1`
  }
}
