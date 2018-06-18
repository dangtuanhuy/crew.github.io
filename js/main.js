document.addEventListener('DOMContentLoaded', function () {
    // Xử lý Copy button jquery lmint tự viết (đừng chỉnh sửa)
    new ClipboardJS('.btn-copy');
    $(function () {
        $('.btn-copy').tooltip();
        $('.btn-copy').click(function(){
            $(this).tooltip('hide').attr('data-original-title', "Copied").tooltip('show');});
        $('.btn-copy').mouseleave(function(){$(this).attr('data-original-title', "Copy this code").tooltip('hide');});
    });
    // End copy button

}, false);