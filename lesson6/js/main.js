const array = [
  {
    content: 'FrontEnd Misha',
    id:'fe',
    relations:['pm','be','ds'],
  },
  {
    content: 'Design Pasha',
    id:'ds',
    relations:['pm', 'fe'],
  },
  {
    content: 'Project Manager Sanya',
    id:'pm',
    relations:['ba', 'fe', 'be', 'ds'],
  },
  {
    content: 'BackEnd Grisha',
    id:'be',
    relations:['pm', 'fe', 'ba'],
  },
  {
    content: 'Business Analyst Sveta',
    id:'ba',
    relations:['pm'],
  }
];

createElements = () => {
  const fe = document.createElement("div");
  fe.value = array[0].content;
  const id1 = document.createAttribute("id");
  id1.value = "fe";
  fe.setAttribute(id1);
  const ds = document.createElement("div");
  ds.value = array[1].content;
  const id2 = document.createAttribute("id");
  id2.value = "ds";
  ds.setAttribute(id2);
  const pm = document.createElement("div");
  pm.value = array[2].content;
  const id3 = document.createAttribute("id");
  id3.value = "pm";
  pm.setAttribute(id3);
  const be = document.createElement("div");
  be.value = array[3].content;
  const id4 = document.createAttribute("id");
  id4.value = "be";
  be.setAttribute(id4);
  const ba = document.createElement("div");
  ba.value = array[4].content;
  const id5 = document.createAttribute("id");
  id5.value = "ba";
  ba.setAttribute(id5);
}

fe = () => {
  const el1 = array[0].relations;
  const els1 = document.getElementById('pm');
  els1.ClassList.add("fe_relations");
  const els2 = document.getElementById('be');
  els2.ClassList.add("fe_relations");
  const els3 = document.getElementById('ds');
  els3.ClassList.add("fe_relations");

  let clicks = 0;
  clicks++;

  if (clicks == 2) {
    fe_remove();
    clicks = 0;
  }
}

ds = () => {
  const el2 = array[1].relations;
  const els4 = document.getElementById('pm');
  els4.ClassList.add("ds_relations");
  const els5 = document.getElementById('fe');
  els5.ClassList.add("ds_relations");

  let clicks = 0;
  clicks++;

  if (clicks == 2) {
    ds_remove();
    clicks = 0;
  }
}

pm = () => {
  const el3 = array[2].relations;
  const els6 = document.getElementById('ba');
  els6.ClassList.add("pm_relations");
  const els7 = document.getElementById('fe');
  els7.ClassList.add("pm_relations");
  const els8 = document.getElementById('be');
  els8.ClassList.add("pm_relations");
  const els9 = document.getElementById('ds');
  els9.ClassList.add("pm_relations");

  let clicks = 0;
  clicks++;

  if (clicks == 2) {
    pm_remove();
    clicks = 0;
  }
}

be = () => {
    const el4 = array[3].relations;
    const els10 = document.getElementById('pm');
    els10.ClassList.add("be_relations");
    const els11 = document.getElementById('fe');
    els11.ClassList.add("be_relations");
    const els12 = document.getElementById('ba');
    els12.ClassList.add("be_relations");

    let clicks = 0;
    clicks++;

    if (clicks == 2) {
      be_remove();
      clicks = 0;
    }
}

ba = () => {
    const el5 = array[4].relations;
    const els13 = document.getElementById('pm');
    els13.ClassList.add("ba_relations");

    let clicks = 0;
    clicks++;

    if (clicks == 2) {
      ba_remove();
      clicks = 0;
    }
}

fe_remove = () => {
  const r1 = document. getElementById('fe').ClassList.remove("fe_relations");
}

ds_remove = () => {
  const r2 = document. getElementById('ds').ClassList.remove("ds_relations");
}

pm_remove = () => {
  const r3 = document. getElementById('pm').ClassList.remove("pm_relations");
}

be_remove = () => {
  const r4 = document. getElementById('be').ClassList.remove("be_relations");
}

ba_remove = () => {
  const r5 = document. getElementById('ba').ClassList.remove("ba_relations");
}

createElements();