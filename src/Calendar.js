import React,{Component} from 'react';
import DisplayCalendar from './DisplayCalendar.js';

class Calendar extends Component {
    render() {
        var d = new Date(this.props.date);
        var nextMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        nextMonth=String(nextMonth);
        var endDate = new Date(d.getFullYear(),d.getMonth()+1,0).getDate(); //31
        var trycomp=[];
        var temp="Invalid Date" ;
        var range = this.props.days;
        var startDate = d.getDate(); //user entered date
        var rg;
        var i=1;
        if(nextMonth !== temp) {
            if(range + startDate >= endDate) {
                rg = endDate - startDate;
                trycomp.push(<DisplayCalendar  monthyr={nextMonth} startDate={startDate} endDate={endDate} range={rg}/>);
              
                range = range - rg;
                while(range > 0) {
                    //console.log(range);
                    nextMonth = new Date(d.getFullYear(), d.getMonth() + i, 1);
                    endDate = new Date(nextMonth.getFullYear(),nextMonth.getMonth()+1,0).getDate();
                    nextMonth=String(nextMonth);
                    if(range >= endDate) {
                        trycomp.push(<DisplayCalendar monthyr={nextMonth} startDate={1} endDate={endDate} range={endDate}/>);
                        range = range - endDate;
                    }
                    else {
                        trycomp.push(<DisplayCalendar monthyr={nextMonth} startDate={1} endDate={endDate} range={range}/>);
                        range = range - endDate;
                    }
                    i++;
                }
            }
            else {
                trycomp.push(<DisplayCalendar monthyr={nextMonth} startDate={startDate} endDate={endDate} range={range}/>);
            }
        } 
        return (
            <div>
                {trycomp}
            </div>
        );
    }
}

export default Calendar;
