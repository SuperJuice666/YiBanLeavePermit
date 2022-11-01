var obj = JSON.parse($response.body)

obj.data.list[0] = {
    "Id": "cec59bb30b0f3c939b1bdbb4f976a332",
    "StartTime": 1663462800,
    "EndTime": 1663498800,
    "CreateTime": 1663463470,
    "OffLeaveTime": 1663548420,
    "InitiateId": "913f334a0118d82bf9e6fd8da5157abb",
    "OffType": 1,
    "OffPersonId": "",
    "OffPersonName": "",
    "OffPersonNumber": "",
    "OffReason": null,
    "IsSupplement": 1,
    "IsLeaveSchool": 1,
    "IsAcrossDay": 2,
    "AcrossDays": 0,
    "CancelInitiateId": null,
    "BackInitiateId": null,
    "IsApproveCancel": 0,
    "IsApproveBack": 0,
    "leaveState": 0,
    "IsHasCancel": 2,
    "FileUrl": null
}

obj.data.list[0].StartTime = Math.round(new Date(new Date().toDateString() + ' 8:00') / 1000).toString()
obj.data.list[0].EndTime = Math.round(new Date(new Date().toDateString() + ' 20:00') / 1000).toString()
obj.data.list[0].CreateTime = Math.round(new Date(new Date().toDateString() + ' 8:00') / 1000).toString()
obj.data.list[0].OffLeaveTime = 0
obj.data.list[0].OffType = 0
obj.data.list[0].IsSupplement = 0
obj.data.list[0].leaveState = 1
console.log(obj)

$done({body: JSON.stringify(obj)})