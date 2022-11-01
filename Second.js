Date.prototype.format = function (format) {
    /*
     * eg:format="YYYY-MM-dd hh:mm:ss";

     */
    var o = {
        "M+": this.getMonth() + 1, // month
        "d+": this.getDate(), // day
        "h+": this.getHours(), // hour
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
        "S": this.getMilliseconds()
        // millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

var obj = JSON.parse($response.body);
var obj = {
    "msg": "",
    "data": {
        "WFName": "请假",
        "Approved": [
            [
                {
                    "Remark": "紧急联系人只能是父母亲并要实名，如果无特殊理由，外出时长不超过8小时，返校时间不晚于20:30分后。不要乘坐任何形式的公共交通工具，返校后及时回寝销假。",
                    "HandSignSource": null,
                    "State": 1,
                    "WorkTime": "2022-10-23 08:45",
                    "HandSignUrl": null,
                    "HandSignUri": null,
                    "Node": 0,
                    "WorkTimeStamp": 1666485933,
                    "WorkPersonInfo": {
                        "Department": "",
                        "PersonType": "staff",
                        "Name": "",
                        "JobNo": "103069",
                        "Gender": 1
                    }
                }
            ]
        ],
        "LastHandSignSource": null,
        "HasEditionAccess": false,
        "WFOtherConfig": [],
        "Process": {
            "Flow": [
                {
                    "To": {
                        "Title": "辅导员(走管辖)",
                        "Type": "role",
                        "Value": {
                            "IsRule": true,
                            "RoleId": [
                                "0f2ef0dc2debf871d30f5e72842fe2be"
                            ]
                        }
                    },
                    "FormAccess": [
                        {
                            "FieldId": "IsLeaveSchool",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "StartTime",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "EndTime",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "Duration",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "LeaveType",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "empty",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "MyTel",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "Contacter",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "ContactTel",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "Reason",
                            "Access": [
                                1
                            ]
                        },
                        {
                            "FieldId": "a906ef77e2e7caa7996e2fd5cf13ef6b",
                            "Access": [
                                1
                            ]
                        }
                    ],
                    "MaxNumber": 1000,
                    "Way": {
                        "Code": 1,
                        "HandSign": 0,
                        "Value": 0
                    }
                }
            ],
            "CCTrigger": "success",
            "WFId": "cc8d7224f96da66d9be9471f6e4b0375"
        },
        "Initiate": {
            "UniversityId": "3e3aefdacd8ee986d9793d4c87a63a25",
            "Id": "da1d1ffeb62cb7b2d9a93c3d0dee058f",
            "PersonId": "2f361f4b365b893484870b465e9d43e1",
            "SerialNo": "20221023082920827763",
            "State": 2,
            "WFId": "cc8d7224f96da66d9be9471f6e4b0375",
            "ProcessId": "bf97909d8141f2e26b6fd2ac81d892ae",
            "FormDataJson": [
                {
                    "component": "Radio",
                    "id": "IsLeaveSchool",
                    "label": "是否离校",
                    "value": "是"
                },
                {
                    "component": "Date",
                    "id": "StartTime",
                    "label": "开始时间",
                    "value": "2022-10-23 09:25"
                },
                {
                    "component": "Date",
                    "id": "EndTime",
                    "label": "结束时间",
                    "value": "2022-10-23 16:35"
                },
                {
                    "component": "InputNumber",
                    "id": "Duration",
                    "label": "时长(天)",
                    "value": 0.5
                },
                {
                    "component": "InputNumber",
                    "id": "isAcrossDay",
                    "label": "跨天时间",
                    "value": 0,
                    "isHideComponent": "1"
                },
                {
                    "component": "Radio",
                    "id": "LeaveType",
                    "label": "请假类型",
                    "value": "事假"
                },
                {
                    "component": "InputNumber",
                    "id": "MyTel",
                    "label": "本人联系电话",
                    "value": ""
                },
                {
                    "component": "Input",
                    "id": "Contacter",
                    "label": "紧急联系人",
                    "value": ""
                },
                {
                    "component": "InputNumber",
                    "id": "ContactTel",
                    "label": "紧急联系电话",
                    "value": ""
                },
                {
                    "component": "Textarea",
                    "id": "Reason",
                    "label": "请假原因",
                    "value": ""
                },
                {
                    "component": "Image",
                    "id": "a906ef77e2e7caa7996e2fd5cf13ef6b",
                    "label": "佐证材料上传",
                    "value": []
                }
            ],
            "ExtendDataJson": null,
            "WorkNode": 0,
            "PersonInfo": {
                "Profession": "",
                "PersonType": "student",
                "Mobile": null,
                "Class": "",
                "Grade": "",
                "Name": "",
                "Number": "",
                "College": "",
                "Campus": "",
                "Gender": "",
                "StudyYear": "4.0",
                "EducationLevel": 2
            },
            "StateTime": "2022-10-23 08:45",
            "CreateTime": 1666484960
        },
        "ReuseFillState": 2,
        "LastHandSignUri": null,
        "HasInitiateLog": false,
        "InitiateExtend": []
    },
    "code": 0
}

info = JSON.parse($prefs.valueForKey("info"));
obj.data.Approved[0][0].WorkPersonInfo.Department = info.学院
obj.data.Approved[0][0].WorkPersonInfo.Name = info.辅导员
obj.data.Initiate.FormDataJson[6].value = info.本人联系电话
obj.data.Initiate.FormDataJson[7].value = info.紧急联系人
obj.data.Initiate.FormDataJson[8].value = info.紧急联系电话
obj.data.Initiate.FormDataJson[9].value = info.请假原因
obj.data.Initiate.PersonInfo.Profession = info.专业
obj.data.Initiate.PersonInfo.Class = info.班级
obj.data.Initiate.PersonInfo.Name = info.姓名
obj.data.Initiate.PersonInfo.Number = info.学号
obj.data.Initiate.PersonInfo.College = info.学院
obj.data.Initiate.PersonInfo.Campus = info.校园
obj.data.Initiate.PersonInfo.Gender = info.性别

// obj.data.Approved[0][0].Remark = null
// obj.data.Initiate.FormDataJson[9].value = "回家"
// obj.data.Initiate.FormDataJson.splice(10, 1)
// obj.data.Initiate.ExtendDataJson.content[0].value = "\u5426"
// obj.data.Initiate.ExtendDataJson.IsSupplement = 1

obj.data.Approved[0][0].WorkTime = new Date().format("yyyy-MM-dd 07:30")
obj.data.Approved[0][0].WorkTimeStamp = Math.round(new Date(new Date().toDateString() + ' 7:30') / 1000).toString()
// obj.data.Approved[1][0].WorkTime = new Date().format("yyyy-MM-dd 07:30")
// obj.data.Approved[1][0].WorkTimeStamp = Math.round(new Date(new Date().toDateString() + ' 7:30') / 1000).toString()
obj.data.Initiate.FormDataJson[1].value = new Date().format("yyyy-MM-dd 08:00")
obj.data.Initiate.FormDataJson[2].value = new Date().format("yyyy-MM-dd 20:00")
obj.data.Initiate.FormDataJson[3].value = 0.5
obj.data.Initiate.StateTime = new Date().format("yyyy-MM-dd 07:30")
obj.data.Initiate.CreateTime = Math.round(new Date(new Date().toDateString() + ' 7:30') / 1000).toString()

var id1 = obj.data.Approved[0][0].WorkTime.replace(/[^0-9]/ig, "")
var id2 = Math.random()
var id3 = Math.round(id2 * 100000000)
var id = id1 + id3
obj.data.Initiate.SerialNo = id

$done({body: JSON.stringify(obj)})