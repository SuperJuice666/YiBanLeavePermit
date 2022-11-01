var obj = JSON.parse($response.body)
for (var i = 0; i < obj.data.length; i++) {
    obj.data[i].isMe = true
}
$done({body: JSON.stringify(obj)})
