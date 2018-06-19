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
    var getCodeTag = document.querySelectorAll('pre code');
    for (var gr = 0; gr < getCodeTag.length; gr++) {
        var getS = getCodeTag[gr].innerHTML;
        // Phân code ra thành cụm, tạo cache để xử lý
        var words = getS.split(" "), codeCache = "";
        for (var i = 0; i < words.length; i++) {
            // Nếu có dấu =
            if (words[i].indexOf("=") != -1) {
                // Tiếp tục phân chia để xử lý
                var devideTag = words[i].split("=");
                words[i] = `&nbsp;<span class="codeatt">${devideTag[0]}=</span>`
                +`<span class="codein">${devideTag[1]}</span>`;
            }
            // Nếu không có dấu =
            else {
                words[i] = `<span class="codetag">${words[i]}</span>`;
            };
            // Xử lý xong cụm nào thì lưu cụm đó vào cache
            codeCache += words[i];
        }; // Kết thúc vòng lặp for xử lý cụm, tiến hành đồng bộ cache
        getCodeTag[gr].innerHTML = codeCache;
    }; // End Code Box


}, false);