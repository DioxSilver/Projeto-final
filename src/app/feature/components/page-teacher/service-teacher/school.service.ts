import { Injectable } from '@angular/core';
import { TaskList } from 'src/app/feature/model/models';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  listas: Array<TaskList> = [   {materia:'geografia',
  nome:'Nami',
  idade:22,
  Telefone:'3165416554',
  email:'nami-navegadora@gmail.com',
  passeword:'1234',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnurPcq1UwUrha_HK8f9rzRbQMqC5nH3IBcg&usqp=CAU'
},
  {materia:'História',
  nome:'Nico-Robin',
  idade:30,
  Telefone:'2114657458',
  email:'robin-historiadora@gmail.com',
  passeword:'1234',
  imageUrl:'data:image/jpeg;base64,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'

},
  {materia:'inglês',
  nome:'guts',
  idade:24,
  Telefone:'34554598746',
  email:'guts.dragonslayer@gmail.com',
  passeword:'1234',
  imageUrl:'data:image/jpeg;base64,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'
},

  ];

  constructor() { }
  getAll(){
    return this.listas;
  }
  getById(nome:string){
    this.listas.find((teacher)=> teacher.nome ===nome)
  }
  getSchoolByEmailAndPasseword(email:string|undefined, passeword: string| undefined){
    return this.listas.find((teacher)=> teacher.email === email && teacher.passeword === passeword)
  }

getDefaultTeacher(): TaskList{
  return {
    materia:'',
    nome: '',
    idade:0,
    Telefone:'',
    imageUrl:'',
    email:'',
    passeword:'',
  }

}
}

  

