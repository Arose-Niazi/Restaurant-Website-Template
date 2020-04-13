
function cod() {
    document.getElementById("eventForm").innerHTML = '<form autocomplete="off">'+
        //<!--Team name-->
        '<div class="grid-item"><span class="Q">Team Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Team Name" type="TEXT" NAME="team-name" pattern="{1,32}" title="Team name can contain letters and numbers. e.g. Team1" required /></div>'+
        //<!--Leader Name-->
        '<div class="grid-item"><span class="Q">Team Leader Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Leader Name" type="TEXT" NAME="leader-name" pattern="[A-Za-z]{1,32}" title="Name can contain letters. e.g. John" required /></div>'+
        //<!--CNIC-->
        '<div class="grid-item"><span class="Q">CNIC (Team Leader)<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="00000-0000000-0" TYPE="TEXT" NAME="cnic" maxlength="15" pattern="\\d{5}[\\-]\\d{7}[\\-]\\d{1}" title="Enter CNIC" required /></div>'+
        //<!--Contact Number-->
        '<div class="grid-item"><span class="Q">Contact No.<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input class="read" style="width: 20%; padding-left: 10px; padding-right: 10px;" type="text" name="code" value="+92" readonly> <input style="width: 79.3%" placeholder="000-0000000" TYPE="text" NAME="CONATCT" maxlength="11" pattern="\\d{3}[\\-]\\d{7}" required /></div>'+
        //<!--Member's Names-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member1-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--2-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member2-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--3-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member3-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--4-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member4-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--Submit Button-->
        '<div class="grid-item"></div><button class="allBtns btn-sub">SUBMIT</button>'+
    '</form>';
    //document.getElementById("cod").style.color = "rgb(55,116,201)";
}

function fifa() {
    document.getElementById("eventForm").innerHTML = '<form autocomplete="off">'+
        //<!--Name-->
        '<div class="grid-item"><span class="Q">Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Leader Name" type="TEXT" NAME="leader-name" pattern="[A-Za-z]{1,32}" title="Name can contain letters. e.g. John" required /></div>'+
        //<!--CNIC-->
        '<div class="grid-item"><span class="Q">CNIC<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="00000-0000000-0" TYPE="TEXT" NAME="cnic" maxlength="15" pattern="\\d{5}[\\-]\\d{7}[\\-]\\d{1}" title="Enter CNIC" required /></div>'+
        //<!--Contact Number-->
        '<div class="grid-item"><span class="Q">Contact No.<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input class="read" style="width: 20%; padding-left: 10px; padding-right: 10px;" type="text" name="code" value="+92" readonly> <input style="width: 79.2%" placeholder="000-0000000" TYPE="text" NAME="CONATCT" maxlength="11" pattern="\\d{3}[\\-]\\d{7}" required /></div>'+
        //<!--Submit Button-->
        '<div class="grid-item"></div><button class="allBtns btn-sub">SUBMIT</button>'+
    '</form>';
    //document.getElementById("fifa").style.color = "rgb(55,116,201)";
}

function futsal() {
    document.getElementById("eventForm").innerHTML = '<form autocomplete="off">'+
        //<!--Team name-->
        '<div class="grid-item"><span class="Q">Team Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Team Name" type="TEXT" NAME="team-name" pattern="{1,32}" title="Team name can contain letters and numbers. e.g. Team1" required /></div>'+
        //<!--Leader Name-->
        '<div class="grid-item"><span class="Q">Team Leader Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Leader Name" type="TEXT" NAME="leader-name" pattern="[A-Za-z]{1,32}" title="Name can contain letters. e.g. John" required /></div>'+
        //<!--CNIC-->
        '<div class="grid-item"><span class="Q">CNIC (Team Leader)<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="00000-0000000-0" TYPE="TEXT" NAME="cnic" maxlength="15" pattern="\\d{5}[\\-]\\d{7}[\\-]\\d{1}" title="Enter CNIC" required /></div>'+
        //<!--Contact Number-->
        '<div class="grid-item"><span class="Q">Contact No.<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input class="read" style="width: 20%; padding-left: 10px; padding-right: 10px;" type="text" name="code" value="+92" readonly> <input style="width: 79.3%" placeholder="000-0000000" TYPE="text" NAME="CONATCT" maxlength="11" pattern="\\d{3}[\\-]\\d{7}" required /></div>'+
        //<!--Member's Names-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member1-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--2-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member2-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--3-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member3-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--4-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member4-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--5-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member5-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--6-->
        '<div class="grid-item"><span class="Q">Member Name : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member6-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John"/></div>'+
        //<!--Submit Button-->
        '<div class="grid-item"></div><button class="allBtns btn-sub">SUBMIT</button>'+
    '</form>';
    //document.getElementById("cod").style.color = "rgb(55,116,201)";
}

function treasureHunt() {
    document.getElementById("eventForm").innerHTML = '<form autocomplete="off">'+
        //<!--Team name-->
        '<div class="grid-item"><span class="Q">Team Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Team Name" type="TEXT" NAME="team-name" pattern="{1,32}" title="Team name can contain letters and numbers. e.g. Team1" required /></div>'+
        //<!--Leader Name-->
        '<div class="grid-item"><span class="Q">Team Leader Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Leader Name" type="TEXT" NAME="leader-name" pattern="[A-Za-z]{1,32}" title="Name can contain letters. e.g. John" required /></div>'+
        //<!--CNIC-->
        '<div class="grid-item"><span class="Q">CNIC (Team Leader)<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="00000-0000000-0" TYPE="TEXT" NAME="cnic" maxlength="15" pattern="\\d{5}[\\-]\\d{7}[\\-]\\d{1}" title="Enter CNIC" required /></div>'+
        //<!--Contact Number-->
        '<div class="grid-item"><span class="Q">Contact No.<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input class="read" style="width: 20%; padding-left: 10px; padding-right: 10px;" type="text" name="code" value="+92" readonly> <input style="width: 79.3%" placeholder="000-0000000" TYPE="text" NAME="CONATCT" maxlength="11" pattern="\\d{3}[\\-]\\d{7}" required /></div>'+
        //<!--Member's Names-->
        '<div class="grid-item"><span class="Q">Member Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member1-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John" required /></div>'+
        //<!--2-->
        '<div class="grid-item"><span class="Q">Member Name : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member2-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John"/></div>'+
        //<!--3-->
        '<div class="grid-item"><span class="Q">Member Name : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member3-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John"/></div>'+
        //<!--4-->
        '<div class="grid-item"><span class="Q">Member Name : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member4-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John"/></div>'+
        //<!--5-->
        '<div class="grid-item"><span class="Q">Member Name : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member5-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John"/></div>'+
        //<!--6-->
        '<div class="grid-item"><span class="Q">Member Name : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Member Name" type="TEXT"NAME="member6-name" pattern="[A-Za-z]{1,32}"title="Name can contain letters. e.g. John"/></div>'+
        //<!--Submit Button-->
        '<div class="grid-item"></div><button class="allBtns btn-sub">SUBMIT</button>'+
    '</form>';
    //document.getElementById("cod").style.color = "rgb(55,116,201)";
}

function party() {
    document.getElementById("eventForm").innerHTML = '<form autocomplete="off">'+
        //<!--Name-->
        '<div class="grid-item"><span class="Q">Name<span class="req"> *</span> : </span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="Leader Name" type="TEXT" NAME="leader-name" pattern="[A-Za-z]{1,32}" title="Name can contain letters. e.g. John" required /></div>'+
        //<!--CNIC-->
        '<div class="grid-item"><span class="Q">CNIC<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input style="margin-bottom: 1px" placeholder="00000-0000000-0" TYPE="TEXT" NAME="cnic" maxlength="15" pattern="\\d{5}[\\-]\\d{7}[\\-]\\d{1}" title="Enter CNIC" required /></div>'+
        //<!--Contact Number-->
        '<div class="grid-item"><span class="Q">Contact No.<span class="req"> *</span> :</span></div>'+
        '<div class="grid-item"><input class="read" style="width: 20%; padding-left: 10px; padding-right: 10px;" type="text" name="code" value="+92" readonly> <input style="width: 79.2%" placeholder="000-0000000" TYPE="text" NAME="CONATCT" maxlength="11" pattern="\\d{3}[\\-]\\d{7}" required /></div>'+
        //<!--Reg Number-->
        '<div class="grid-item"><span class="Q">Registeration No. :</span></div>'+
        '<div class="grid-item"><input placeholder="AA00-BBB-000" TYPE="text" NAME="CONATCT" SIZE="30" maxlength="12" pattern="[A-Za-z][A-Za-z][0-9][0-9][\\-][A-Za-z][A-Za-z][A-Za-z][\\-][0-9][0-9][0-9]" required /></div>'+
        //<!--Submit Button-->
        '<div class="grid-item"></div><button class="allBtns btn-sub">SUBMIT</button>'+
    '</form>';
    //document.getElementById("fifa").style.color = "rgb(55,116,201)";
}