function validateForm() {
    var x = document.forms["log"]["email"].value;
    var e=document.getElementById("email");
    var m=document.getElementById("main");
    var y=document.getElementById("correct");
    var n=document.getElementById("wrong");
    if (x == "") {
      n.style.display="block";
      y.style.display="none";
      e.className="form-control form-control-danger"
      m.className="form-group has-danger";
    }
    else{
        n.style.display="none";
      y.style.display="block";
      e.className="form-control form-control-success"
      m.className="form-group has-success";
    }
  }
  function registerValidation(){
      var name=document.forms["register"]["name"].value;
      var mno=document.forms["register"]["mno"].value;
      var email=document.forms["register"]["email"].value;
      var mname=document.getElementById("name");
      var no=document.getElementById("mno");
      var mail=document.getElementById("email");
      var e=document.getElementById("main");
      var m=document.getElementById("mname");
      var n=document.getElementById("no");
      var cn=document.getElementById("correctname");
      var wn=document.getElementById("wrongname");
      var cm=document.getElementById("correctno");
      var wm=document.getElementById("wrongno");
      var ce=document.getElementById("correctmail");
      var we=document.getElementById("wrongmail");
    if(name==""){
        wn.style.display="block";
      cn.style.display="none";
      mname.className="form-control form-control-danger"
      m.className="form-group has-danger";
    }
    else{
        wn.style.display="none";
      cn.style.display="block";
      mname.className="form-control form-control-success"
      m.className="form-group has-success";
    }
    if(mno.length<10){
        wm.style.display="block";
      cm.style.display="none";
      no.className="form-control form-control-danger"
      n.className="form-group has-danger";
    }
    else{
        wm.style.display="none";
      cm.style.display="block";
      no.className="form-control form-control-success"
      n.className="form-group has-success";
    }
    if(email==""){
        we.style.display="block";
      ce.style.display="none";
      mail.className="form-control form-control-danger"
      e.className="form-group has-danger";
    }
    else{
        wn.style.display="none";
      cn.style.display="block";
      mail.className="form-control form-control-success";
      e.className="form-group has-success";
    }
  }