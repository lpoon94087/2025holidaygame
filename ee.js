(function(){
  // decoder (handles UTF-8 via decodeURIComponent(escape(...)))
  var _0x9f = function(s){
    try { return decodeURIComponent(escape(atob(s))); }
    catch(e) { return atob(s); }
  };

  // Base64-encoded messages (so they're not plainly visible in source)
  var _0x7a = [
    "WW91J3JlIGRvaW5nIGFtYXppbmchIEtlZXAgaXQgdXAh",
    "WW914oCZdmUgZ290IHRoaXMg4oCUIG9uZSBzdGVwIGF0IGEgdGltZSE=",
    "QmVsaWV2ZSBpbiB5b3Vyc2VsZiwgeW914oCZcmUgc3Ryb25nZXIgdGhhbiB5b3UgdGhpbmsh",
    "RXZlcnkgZWZmb3J0IGNvdW50cy4gS2VlcCBnb2luZyE=",
    "R3JlYXQgam9iISBZb3XigJlyZSBtYWtpbmcgcHJvZ3Jlc3Mh",
    "RG9u4oCZdCBzdG9wIG5vdyDigJQgc3VjY2VzcyBpcyBjbG9zZSE=",
    "WW914oCZcmUgZG9pbmcgZ3JlYXQhIFN0YXkgZm9jdXNlZCE=",
    "S2VlcCBzaGluaW5nIOKAlCB5b3XigJlyZSB1bnN0b3BwYWJsZSE=",
    "WW914oCZcmUgYXdlc29tZSwgZG9u4oCZdCBmb3JnZXQgdGhhdCE=",
    "WW914oCZcmUgZ29vZCBnb29kISBLZWVwIGdvaW5nIQ=="
  ];

  // Base64-encoded URLs (edit these base64 strings if you change paths)
  var _0x2b = [
    "aW1nL1FSQ09ERV9ISU5UMS53ZWJw",
    "aW1nL1FSQ09ERV9ISU5UMi53ZWJw",
    "aW1nL1FSQ09ERV9ISU5UMy53ZWJw",
    "aW1nL1FSQ09ERV9TQ09SRUJPQVJELndlYnA="
  ];

  // Expose obfuscated-but-callable function
  window.triggerEE = function(){
    // decode on demand (keeps raw source compact)
    var msgs = _0x7a.map(_0x9f);
    var urls = _0x2b.map(_0x9f);

    var r = Math.random();
    if (r < 0.95) {
      var m = msgs[Math.floor(Math.random() * msgs.length)];
      alert(m);
    } else {
      var u = urls[Math.floor(Math.random() * urls.length)];
      window.open(u, "_blank");
    }
  };
})();

