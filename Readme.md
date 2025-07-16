# Ford Connected Vehicles Dashboard

![Ford Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/800px-Ford_logo_flat.svg.png)

Um dashboard de monitoramento em tempo real para veículos conectados da Ford, desenvolvido com Angular no frontend e Node.js/Express no backend.

## Funcionalidades Principais

- 🚗 Visualização de frota de veículos conectados
- 📊 Métricas globais e por modelo específico
- 🔍 Busca de veículos por modelo ou VIN
- 📍 Localização em tempo real dos veículos
- 🔄 Status de atualizações de software
- 📱 Design responsivo para todos os dispositivos

## Tecnologias Utilizadas

### Frontend
- Angular 19
- TypeScript
- HTML5 & CSS3
- Font Awesome (ícones)
- Chart.js (gráficos - se aplicável)

### Backend
- Node.js
- Express
- CORS

## Estrutura do Projeto
```
ford-connected-dashboard/
├── angular/ # Frontend Angular
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/ # Componentes Angular
│ │ | | ├── dashboard
│ │ │ │ |  └── vehicle-card  
│ │ | │ ├── header
│ │ | │ ├── home
│ │ | | └── login|   
│ │ │ ├── models/ # Interfaces TypeScript
│ │ │ │ ├── user
│ │ │ │ └── vehicle
│ │ │ └── services/ # Serviços Angular
│ │ │   ├── auth.service
│ │ │   └── vehicle.service 
│ │ └── assets/ # Imagens e recursos estáticos
│ │   └── img/  
│ │     ├── broncoSport
│ │     ├── ford_ranger
│ │     ├── ford
│ │     ├── mustang
│ │     ├── ranger
│ │     └── territory
├── ford_backend/ # Backend Node.js   
│ ├── img/ # Mesmo arquivode cima
│ ├── server.js # Servidor principal
│ └── package.json # Dependências do backend
└── README.md # Este arquivo
```

## Como Executar o Projeto

### Pré-requisitos
- Node.js (v18+ recomendado)
- Angular CLI (v16+)
- NPM ou Yarn

### Instalação

1. **Backend**:
   ```bash
   cd server
   npm install
   npm start
   ```
2. **Frontend**:
    ```bash
    cd angular
    npm install
    ng serve   
    ```
## 🌐 Endpoints

### Backend
```bash
http://localhost:3001
```
### Frontend
```bash
http://localhost:4200
```

## 🔌  Rotas da API
```bash
Método	Rota	Descrição
POST	/login	Autenticação de usuário
GET	/vehicles	Lista todos os veículos
POST	/vehicleData	Consulta dados por VIN
```

## 🔑 Credenciais de Acesso
```bash
usuário: admin
senha: 123456
```

## 🏷️ VINs Válidos para Teste
```bash
2FRHDUYS2Y63NHD22454
2RFAASDY54E4HDU34874
2FRHDUYS2Y63NHD22455
2RFAASDY54E4HDU34875
```

## 🤝 Como Contribuir
iga estes passos para contribuir com o projeto:

1. Faça um fork do repositório

2. Crie uma branch para sua feature:
```bash
git checkout -b feature/nome-da-feature
```
3. Commit suas mudanças:
```bash
Commit suas mudanças:
```
4. Push para a branch:
```bash
git push origin feature/nome-da-feature
```
5. Abra um Pull Request

## 📜 Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para obter detalhes.

## 👤 Autor

Desenvolvido por **Ricardo Amor Divino**  
- 🔗 GitHub: [github.com/DuasEstrelas1931](https://github.com/DuasEstrelas1931)  
- 🔗 LinkedIn: [linkedin.com/in/ricardo-amor-divino-a562a9125](https://www.linkedin.com/in/ricardo-amor-divino-a562a9125)
