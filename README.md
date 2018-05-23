# Teste para candidatos à vaga de desenvolvedor Front-end

> [![BomControle](bc_logo.png)](https://bomcontrole.com.br)
>
> Todos os interessados que fizerem pull request e enviarem o curriculo para **rh@bomcontrole.com.br** receberão um feedback da equipe BomControle.

## Instale no seu sistema operacional
    nodejs, npm e gulp-cli -g

### Este teste já inclui AngularJS, Bootstrap, Jquery e outros recursos.
#### Arquitetura:

```
bomControle-front-end-teste/
├── app/
│   ├── config                -> Arquivos de configuração do sistema
│   ├── directives            -> diretivas personalizadas
│   ├── filters               -> filtros personalizados
│   ├── pages                 
│   │    ├── testeFrontEnd    -> pagina home de boas vindas
│   │    └── createUserTest   -> pagina de cadastro ( formulário )
│   ├── services              
│   │    ├── http             -> Serviços http (p/comunicação com api)
│   │    └── util             -> serviços para processamento de regras de negocio no front  etc.
│   └── app.js                -> modulo principal ( core aplication ) e injeções de dependências
├── public                    -> auto disponibiliza js e css para index.html pelo gulp
├── .gitignore                
├── .jshintrc
├── .bc_logo.png
├── gulpfile.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── users.json
```
 ## Iniciando Teste

Para iniciar o teste, faça um fork deste repositório.

1. Baixe o fork em sua maquina;
2. Abra um terminal na raiz do projeto e rode o comando: **npm start** (aguarde que deverá abrir o teste no seu navegador) 
3. Na tela app/pages/createUser implemente um formulário para cadastro de usuário com os campos:
 - nome (obrigatório)
 - data de nascimento (obrigatório)
 - sexo (pré-selecionado)
 - cpf (obrigatório)
 - e-mail (obrigatório)
 - telefone 
 -  celular
 -  campos de endereço
4. Seguindo estrutura do projeto crie uma tela com uma tabela de usuários exibindo as colunas de nome a telefone. Use o serviço userHttpServices para obter os registros;
5. Tratar os dados cpf e telefone para que sejam exibidos na tabela de forma formatada ex.: 082.288.055-90;
6. Na tabela adicionar funcionalidade para excluir registro;
7. Adicionar campo de busca que filtre usuários por nome e e-mail;
8. Utilize o menu que está no diretório app/pages/testeFrontEnd/testFrontEnd.html para exibir o mesmo em todas as telas sem duplicar o codigo html.

* **Importante:** O formulário de cadastro não deve fazer requisições para nenhuma url.
* **Importante:** A url da página não pode ser recarregada em momento algum.

### Você pode:

* Utilizar qualquer linguagem de pré-processador css ou css puro;

* **Importante:** Usamos o mesmo teste para todos os níveis de front: **júnior**, **pleno** ou **sênior**, mas procuramos adequar nossa exigência na avaliação com cada um desses níveis sem, por exemplo, exigir excelência de quem está começando :-)

### Ganhe pontos extras por:

* Desenvolver HTML semântico;
* Componentizar seu css;
* Validar os inputs do seu formulário antes de habilitar o botão de envio;
* Utilizar qualquer linguagem de pré-processador css;
* Criar tarefas que gerem versão do projeto minificada (js, css e html) para produção.

**Boa sorte!**