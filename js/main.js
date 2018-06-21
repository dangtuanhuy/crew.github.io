document.addEventListener('DOMContentLoaded', function () {
    // Xử lý Copy button jquery lmint tự viết (đừng chỉnh sửa)
    new ClipboardJS('.btn-copy');
    $('.btn-copy').tooltip();
    $('.btn-copy').on({
        click: function () {
            $(this).tooltip('hide').attr('data-original-title', "Copied").tooltip('show');
        },
        mouseleave: function () {
            $(this).attr('data-original-title', "Copy this code").tooltip('hide');
        }
    });
    // End copy button

    // Start Code Box
    var getCodeTag = document.querySelectorAll('.lang-html pre code');
    console.log(getCodeTag[1]);
    for (var gr = 0; gr < getCodeTag.length; gr++) {
        var getText = getCodeTag[gr].innerHTML; getText.trim();
        var stt, cache= new String();
        // Nếu bắt đầu bằng <
        if (getText.startsWith('&lt;')) {
            if(getText.startsWith('&lt;!--')) {
                stt=5; cache+=`<span class="codecmt">`;
            } else {
                stt=1; cache+=`<span class="codetag">`;
            };
        }
        else if (getText.startsWith('&lt;!--')) {stt=5; cache+=`<span class="codecmt">`;};

        // Duyệt chuỗi từ đầu
        for (var n = 0; n < getText.length; n++) {
            if (stt == 1) {
                // Nếu là space
                if (getText[n] == ' ') {
                    cache += `</span><span class="codeatt">`;
                    stt = 2;
                } else {
                    // Không phải space
                    cache += `${getText[n]}`;
                };
                if (getText[n] == '&' && getText[n + 1] == 'g' && getText[n + 3] == ';') {
                    cache += `gt;`;
                    n+=3; 
                    // Nếu tiếp theo không phải <
                    if(getText[n+1] != '&' && getText[n+2] != 'l' && getText[n+4] != ';') {
                        stt=4; cache+='</span>';
                        if(n!=getText.length-1) {
                            cache+=`<span class="codenor">`;
                        };
                    };
                }
            };
            // Attribute color
            if (stt == 2) {
                if (getText[n] == '=') {
                    cache += `${getText[n]}</span><span class="codein">`;
                    stt = 3;
                } else {
                    cache += `${getText[n]}`;
                };
            };
            if(stt==3) {
                if(getText[n+1]!='"') {
                    cache+=getText[n];
                } else {
                    if(getText[n+2]==' ') {
                        cache+=`${getText[n]}"</span><span class="codeatt">`; stt=2; n++;
                    }
                    if(getText[n+2]=='&' && getText[n+3]=='g' && getText[n+5]==';') {
                        cache+=`${getText[n]}"</span><span class="codetag">`; stt=1; n++;
                    }
                };
            };
            if(stt==4) {
                // Nếu hiện tại là <
                if (getText[n] == '&' && getText[n + 1] == 'l' && getText[n + 3] == ';') {
                    if(getText[n+4]=='!' && getText[n+5]=="-" &&getText[n+6]=='-') {
                        cache+=`</span><span class="codecmt">`;
                        stt=5;
                    } else {
                        cache+=`</span><span class="codetag">${getText[n]}`;
                        stt=1;
                    }
                } 
                else {
                    if(getText[n]!=';') {
                        cache+=`${getText[n]}`; 
                    }               
                };
            };
            if(stt==5) {
                // Kiểm tra xem đến ngoặc đóng chưa
                if (getText[n] == '&' && getText[n + 1] == 'g' && getText[n + 3] == ';') {
                    cache += `&gt;`;
                    n+=4;
                    // Nếu hiện tại là <
                    if (getText[n] == '&' && getText[n + 1] == 'l' && getText[n + 3] == ';') {
                        if(getText[n+4]=='!' && getText[n+5]=="-" &&getText[n+6]=='-') {
                            cache+=`</span><span class="codecmt">`;
                            stt=5;
                        } else {
                            cache+=`</span><span class="codetag">${getText[n]}`;
                            stt=1;
                        }
                    } 
                    else {
                        cache+=`</span><span class="codenor">${getText[n]}`;
                        stt=4;              
                    };
                } else {
                    cache+=getText[n];
                }
            }
        };
        getCodeTag[gr].innerHTML = cache;
    };
    // End Code Box

}, false);