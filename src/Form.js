import React,{Component} from 'react';
class Form extends Component {
    getDetails = (e) => {
        e.preventDefault();
        var date = document.getElementById("user-date").value;
        var days = document.getElementById("user-days").value;
        this.props.getDateDetails(date, days);
    }
    render(){
        return(
            <form>
                <label>Enter Desired From Date:</label><br></br>
                <br></br><input className="form-control" id="user-date" type="date" name="date" required></input><br></br>
                <br></br><label>Enter Number of Days: (Range)</label>
                <br></br><input className="form-control" id="user-days" type="text" required></input><br></br>
                <br></br><label>Country Code:</label><br></br>
                <select name="country" id="country" required>
                    <option value="US">US</option>
                    <option value="IND">IND</option>
                </select><br></br>
                <br></br><input className="submit" type="button" value="Submit" onClick={this.getDetails}></input>
            </form>
        );
    }
}

export default Form;