const app = document.createElement('div');
app.id = 'app';
document.body.append(app);

const data = [
    {
      content: 'Frontend Misha',
      id: 'fe',
      relations: ['pm', 'be', 'ds']
    },
    {
      content: 'Design Pasha',
      id: 'ds',
      relations: ['pm', 'fe']
    },
    {
      content: 'Project Manager Sanya',
      id: 'pm',
      relations: ['ba', 'fe', 'be', 'ds']
    },
    {
      content: 'Backend Grisha',
      id: 'be',
      relations: ['pm', 'fe', 'ba']
    },
    {
      content: 'Business Analyst Sveta',
      id: 'ba',
      relations: ['pm']
    }
  ]

const misha = document.createElement('div');
misha.id = data[0].id;
app.append(misha);
misha.textContent = data[0].content;

const pasha = document.createElement('div');
pasha.id = data[1].id;
app.append(pasha);
pasha.textContent = data[1].content;

const sanya = document.createElement('div');
sanya.id = data[2].id;
app.append(sanya);
sanya.textContent = data[2].content;

const grisha = document.createElement('div');
grisha.id = data[3].id;
app.append(grisha);
grisha.textContent = data[3].content;

const sveta = document.createElement('div');
sveta.id = data[4].id;
app.append(sveta);
sveta.textContent = data[4].content;

/* misha.addEventListener('click', function (e) {
    data.relations.setAttribute('class', 'active')
    })

  misha.setAttribute('class', 'active') */