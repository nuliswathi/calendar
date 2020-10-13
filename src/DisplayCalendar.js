import React,{Component} from 'react';
class DisplayCalendar extends Component {
    render() {
        var Days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        var month_arr = ["January", "February", "March", "April", "May", "June", "July", 
            "August", "September", "October", "November", "December"];
        var NumDaysArr=[];
        var j=0;
        var month = this.props.monthyr; 
        while(month.slice(4,7)!== month_arr[j].slice(0,3)) {
            j++;
        }
        var monthName = month_arr[j]+" "+month.slice(11,15);
        var startDate = this.props.startDate; //user entered date
        var endDate= this.props.endDate; //No.of days in month
        var range = this.props.range; //range selected
        var mon_day=month.slice(0,3); 
        var count=0;
        var classNm;
        j=0;
        while(mon_day !== Days[j]) {
            var tempObj = {
                cls: "unselected",
                value : " "
            }
            NumDaysArr.push(tempObj);
            j++;
        }
        for(var i=1;i<=endDate;i++) {
            if(startDate === i) {
                while(range > 0) {
                    tempObj = {
                        cls: "selected",
                        value : i
                    }
                    NumDaysArr.push(tempObj);
                    i++;
                    range--;
                }
                --i;
            }
            else {
                tempObj = {
                    cls: "unselected",
                    value : i
                }
                NumDaysArr.push(tempObj);
            }
        } 
        return (
            <div className="card" >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{monthName}</h5><br></br>
                        {Days.map(day=>(
                            <div className="dateBlock">
                                {day.slice(0,1)}
                            </div>
                        ))}
                        {NumDaysArr.map(function(obj) {
                            if(obj.cls === "selected") {
                                if(count===0 || count===6) {
                                    classNm = "weekend";
                                    console.log(obj.value+" "+classNm+" "+count);
                                }
                                else {
                                    classNm = obj.cls;
                                }
                            }
                            else {
                                classNm = obj.cls;
                                console.log(obj.value+" "+classNm+" "+count);
                            }
                            if(count === 6) {
                                count=-1;
                            }
                            count++;
                            return(
                            <div className={classNm}>
                                 {obj.value} 
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayCalendar;


/*if(obj.cls==="selected") {
    if(count ===0 || count===6) {
        classNm = "weekend";
    }
}
else {
    classNm = obj.cls;
}
if(count===6) {
    count=-1;
}
count++;
console.log(count+" "+classNm+" "+obj.value);*/