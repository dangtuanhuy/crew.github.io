document.addEventListener('DOMContentLoaded', function () {
    // Xử lý Copy button jquery lmint tự viết (đừng chỉnh sửa)
    // new ClipboardJS('.btn-copy');
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
    for(var getText,getCodeTag=document.querySelectorAll('.lang-html pre code'),gr=0;gr<getCodeTag.length;gr++){getText=getCodeTag[gr].innerHTML,getText.trim();var stt,cache=new String;getText.startsWith('&lt;')?getText.startsWith('&lt;!--')?(stt=5,cache+=`<span class="codecmt">`):(stt=1,cache+=`<span class="codetag">`):(stt=4,cache+=`<span class="codenor">`);for(var n=0;n<getText.length;n++)1==stt&&(' '==getText[n]?(cache+=`</span><span class="codeatt">`,stt=2):cache+=`${getText[n]}`,'&'==getText[n]&&'g'==getText[n+1]&&';'==getText[n+3]&&(cache+=`gt;`,n+=3,'&'!=getText[n+1]&&'l'!=getText[n+2]&&';'!=getText[n+4]&&(stt=4,cache+='</span>',n!=getText.length-1&&(cache+=`<span class="codenor">`)))),2==stt&&('='==getText[n]?(cache+=`${getText[n]}</span><span class="codein">`,stt=3):cache+=`${getText[n]}`),3==stt&&('"'==getText[n+1]?(' '==getText[n+2]&&(cache+=`${getText[n]}"</span><span class="codeatt">`,stt=2,n++),'&'==getText[n+2]&&'g'==getText[n+3]&&';'==getText[n+5]&&(cache+=`${getText[n]}"</span><span class="codetag">`,stt=1,n++)):cache+=getText[n]),4==stt&&('&'==getText[n]&&'l'==getText[n+1]&&';'==getText[n+3]?'!'==getText[n+4]&&'-'==getText[n+5]&&'-'==getText[n+6]?(cache+=`</span><span class="codecmt">`,stt=5):(cache+=`</span><span class="codetag">${getText[n]}`,stt=1):';'!=getText[n]&&(cache+=`${getText[n]}`)),5==stt&&('&'==getText[n]&&'g'==getText[n+1]&&';'==getText[n+3]?(cache+=`&gt;`,n+=4,'&'==getText[n]&&'l'==getText[n+1]&&';'==getText[n+3]?'!'==getText[n+4]&&'-'==getText[n+5]&&'-'==getText[n+6]?(cache+=`</span><span class="codecmt">`,stt=5):(cache+=`</span><span class="codetag">${getText[n]}`,stt=1):n<getText.length&&(cache+=`</span><span class="codenor">${getText[n]}`,stt=4)):cache+=getText[n]);getCodeTag[gr].innerHTML=cache};
    // End Code Box

}, false);