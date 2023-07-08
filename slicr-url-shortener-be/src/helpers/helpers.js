const removeProtocol = (url) => {
    const protocolSeparator = '://';
    const protocolIndex = url.indexOf(protocolSeparator);
    
    if (protocolIndex !== -1) {
      return url.slice(protocolIndex + protocolSeparator.length);
    }
    
    return url;
}

module.exports = {
    removeProtocol,
}
  