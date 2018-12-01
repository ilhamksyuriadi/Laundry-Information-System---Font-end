let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
//let expressValidator = require("express-validator");
let dataCustomer = [];
let akun = [
  {
    username: "employee",
    password: 123,
    role: "employee"
  },
  {
    username: "manager",
    password: 123,
    role: "manager"
  }
];

let app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static path
app.use(express.static(path.join(__dirname, "public")));

// Global variabel
/*app.use((req, res, next) => {
  res.locals.dataCustomer = [];
  next();
});*/

// Set route for customer
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/status", (req, res) => {
  res.render("status", { data: dataCustomer });
});

app.post("/navbar", (req, res) => {
  let button = req.body.name;
  if (button == "aboutUs") {
    res.redirect("/");
  } else if (button == "status") {
    res.redirect("/status");
  } else if ((button = "laundryNow")) {
    res.redirect("/form");
  }
});

app.post("/form/add", (req, res) => {
  let dlv = null;
  if (req.body.delivery == "yes") {
    dlv = true;
  } else {
    dlv = false;
  }
  let newCustomer = {
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    status: 0,
    price: 0,
    weight: 0,
    delivery: dlv
  };
  dataCustomer.push(newCustomer);
  res.redirect("/form");
});

// Route for login form
app.get("/login", (req, res) => {
  res.render("LoginForm");
});

app.post("/validate", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  for (let i = 0; i < akun.length; i++) {
    if (akun[i].username == username && akun[i].password == password) {
      if (akun[i].role == "employee") {
        res.redirect("/employee");
      } else {
        res.redirect("/manager");
      }
    }
  }
});

// Set route for manager
//Main page manager
app.get("/manager", (req, res) => {
  res.render("ManagerMain");
});

app.post("/managerNavbar", (req, res) => {
  let button = req.body.button;

  if (button == "addAccount") {
    res.redirect("/manager/addAccount");
  } else if (button == "logout") {
    res.redirect("/login");
  } else if (button == "report") {
    res.redirect("/manager/report");
  } else {
    res.redirect("/manager");
  }
});

//Page manager add account
app.get("/manager/addAccount", (req, res) => {
  res.render("ManagerAddAccount");
});

app.post("/manager/addAccount/managerNavbar", (req, res) => {
  let button = req.body.button;

  if (button == "addAccount") {
    res.redirect("/manager/addAccount");
  } else if (button == "logout") {
    res.redirect("/login");
  } else if (button == "report") {
    res.redirect("/manager/report");
  } else {
    res.redirect("/manager");
  }
});

app.post("/managerAddAccount", (req, res) => {
  let newAccount = {};
  newAccount = {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  };
  akun.push(newAccount);
  res.redirect("/manager/addAccount");
});

//Page manager report
app.get("/manager/report", (req, res) => {
  let Total = 0;
  let Income = 0;
  for (let i = 0; i < dataCustomer.length; i++) {
    if (dataCustomer[i].status == 6) {
      Income += dataCustomer[i].price;
      Total++;
    }
  }
  res.render("ManagerReport", {
    data: dataCustomer,
    total: Total,
    income: Income
  });
});

app.post("/manager/report/managerNavbar", (req, res) => {
  let button = req.body.button;

  if (button == "addAccount") {
    res.redirect("/manager/addAccount");
  } else if (button == "logout") {
    res.redirect("/login");
  } else if (button == "report") {
    res.redirect("/manager/report");
  } else {
    res.redirect("/manager");
  }
});

// Set route for employee
//Main page employee
app.get("/employee", (req, res) => {
  res.render("EmployeeMain");
});

app.post("/employeeNavbar", (req, res) => {
  let button = req.body.button;

  if (button == "request") {
    res.redirect("/employee/input");
  } else if (button == "washList") {
    res.redirect("/employee/washList");
  } else if (button == "summary") {
    res.redirect("/employee/summary");
  } else if (button == "logout") {
    res.redirect("/login");
  } else {
    res.redirect("/employee");
  }
});

//Page employee input
let tempData = null;
app.get("/employee/input", (req, res) => {
  res.render("EmployeeInput", { data: dataCustomer, temp: tempData });
});

app.post("/employee/input/employeeNavbar", (req, res) => {
  let button = req.body.button;

  if (button == "request") {
    res.redirect("/employee/input");
  } else if (button == "washList") {
    res.redirect("/employee/washList");
  } else if (button == "summary") {
    res.redirect("/employee/summary");
  } else if (button == "logout") {
    res.redirect("/login");
  } else {
    res.redirect("/employee");
  }
});

app.post("/tableRequest", (req, res) => {
  let input = req.body.button;
  let phone = req.body.phone;
  if (input == "add") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 2;
        tempData = dataCustomer[i];
      }
    }
  } else if (input == "reject") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = -1;
      }
    }
  } else if (input == "take") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 1;
      }
    }
  } else if (input == "undo") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 0;
      }
    }
  }

  res.redirect("employee/input");
});

app.post("/inputRequest", (req, res) => {
  if (tempData) {
    let phone = req.body.phone;
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 2;
        dataCustomer[i].weight = req.body.weight;
        dataCustomer[i].price = Math.round(Number(req.body.weight) * 6000);
      }
    }
    tempData = null;
  } else {
    let dlv = null;
    if (req.body.delivery == "yes") {
      dlv = true;
    } else {
      dlv = false;
    }
    let newData = {};
    newData = {
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      weight: req.body.weight,
      status: 2,
      price: Math.round(Number(req.body.weight) * 6000),
      delivery: dlv
    };
    dataCustomer.push(newData);
  }
  res.redirect("employee/input");
});

//Page employee washlist
app.get("/employee/washList", (req, res) => {
  res.render("EmployeeWashList", { data: dataCustomer });
});

app.post("/employee/washList/employeeNavbar", (req, res) => {
  let button = req.body.button;

  if (button == "request") {
    res.redirect("/employee/input");
  } else if (button == "washList") {
    res.redirect("/employee/washList");
  } else if (button == "summary") {
    res.redirect("/employee/summary");
  } else if (button == "logout") {
    res.redirect("/login");
  } else {
    res.redirect("/employee");
  }
});

app.post("/inputWashList", (req, res) => {
  let phone = req.body.phone;
  let button = req.body.button;
  if (button == "done") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 3;
      }
    }
  } else {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 0;
      }
    }
  }

  res.redirect("/employee/washList");
});

app.post("/inputDeliver", (req, res) => {
  let phone = req.body.phone;
  let button = req.body.button;
  if (button == "delivery") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 4;
      }
    }
  } else if (button == "pay") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 5;
      }
    }
  } else {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].phone == phone) {
        dataCustomer[i].status = 2;
      }
    }
  }
  res.redirect("/employee/washList");
});

//Page employee summary
app.get("/employee/summary", (req, res) => {
  let Waiting = 0;
  let PickingUp = 0;
  let Rejected = 0;
  let Washing = 0;
  let Done = 0;
  let OnDelivery = 0;
  let Finished = 0;
  let Total = 0;
  let Income = 0;
  let OnProgress = 0;
  for (let i = 0; i < dataCustomer.length; i++) {
    if (dataCustomer[i].status == 0) {
      Waiting++;
      Total++;
      OnProgress++;
    } else if (dataCustomer[i].status == 1) {
      PickingUp++;
      Total++;
      OnProgress++;
    } else if (dataCustomer[i].status == -1) {
      Rejected++;
      Total++;
      OnProgress++;
    } else if (dataCustomer[i].status == 2) {
      Washing++;
      Total++;
      OnProgress++;
    } else if (dataCustomer[i].status == 3) {
      Done++;
      Total++;
      OnProgress++;
    } else if (dataCustomer[i].status == 4) {
      OnDelivery++;
      Total++;
      OnProgress++;
    } else if (dataCustomer[i].status == 5) {
      Finished++;
      Total++;
      OnProgress++;
      Income = Income + dataCustomer[i].price;
    }
  }

  res.render("EmployeeSummary", {
    waiting: Waiting,
    pickingUp: PickingUp,
    rejected: Rejected,
    washing: Washing,
    done: Done,
    onDelivery: OnDelivery,
    finished: Finished,
    total: Total,
    income: Income,
    onProgress: OnProgress
  });
});

app.post("/employee/summary/employeeNavbar", (req, res) => {
  let button = req.body.button;

  if (button == "request") {
    res.redirect("/employee/input");
  } else if (button == "washList") {
    res.redirect("/employee/washList");
  } else if (button == "summary") {
    res.redirect("/employee/summary");
  } else if (button == "logout") {
    res.redirect("/login");
  } else {
    res.redirect("/employee");
  }
});

app.post("/deleteRejected", (req, res) => {
  let button = req.body.button;
  if (button == "delete") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].status == -1) {
        dataCustomer.splice(i, 1);
      }
    }
  } else if (button == "finish") {
    for (let i = 0; i < dataCustomer.length; i++) {
      if (dataCustomer[i].status == 5) {
        dataCustomer[i].status = 6;
      }
    }
  }

  res.redirect("/employee/summary");
});

// Set server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
