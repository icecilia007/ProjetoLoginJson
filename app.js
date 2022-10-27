//criação de variaveis globais vazias
var usuarioLogado = {};
var usuarios = [];
var ultimoId = 1;

//retorna o id para a função que chama-la, exemplo, como na linha 4 está declarado ultimo id=1 ele fára, 1+1=2 e vai retornar 1
function id() {
    ultimoId = ultimoId + 1;
    //aqui ele faz o retorno de 1
    return (ultimoId - 1);
}
//conferindo se tem um usuario logado na sessão ou não, tem ele guarda na variavel usuario logado
if (sessionStorage.getItem('usuarioLogado')) {
    usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
}

if (!sessionStorage.getItem('dbUsuarios')) {
    addUser('admin', 'Administrador', 'admin@teste.com.br', '123456');
}

if (sessionStorage.getItem('dbUsuarios')) {
    usuarios = JSON.parse(sessionStorage.getItem('dbUsuarios'));
}


//entendi, mas não consigo explicar esses [i]
function loginUser(usuario, senha) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario == usuario && usuarios[i].senha == senha) {
            usuarioLogado.id = usuarios[i].id;
            usuarioLogado.usuario = usuarios[i].usuario;
            usuarioLogado.nome = usuarios[i].nome;
            usuarioLogado.email = usuarios[i].email;
            sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            return true;
        }
    }
    return false;
}
//criação de variavel usuarioCad que vai cadastras as seguintes informações:
function addUser(usuario, nome, email, senha) {
    let usuarioCad = { "id": id(), "usuario": usuario, "nome": nome, "email": email, "senha": senha };
    usuarios.push(usuarioCad);
    //adicionar o usuario no final.
    //armazenando em usuarios
    sessionStorage.setItem('dbUsuarios', JSON.stringify(usuarios));
    return true;
}
//ele coloca usuario Logado em um conjunto vazia, como se tirasse todas as informações que estavam dentro e ele sai da pagina por isso.
function logoutUser() {
    usuarioLogado = {};
    //armazena na variavel de sessao o usuario que está logado
    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
    window.location.href = 'index.html';
}
//usuario adm primeiro usuario criado e armazenado
function listUsers() {

}