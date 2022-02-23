export const ELEMENTOS = {
    aceitarCoockie: 'button[id^=onetrust]',

    Cadastro:{
        INPnomeCadastro: 'input[name^=first]',
        INPsobrenomeCadastro: 'input[name^=last]',
        INPEmailCadastro: 'input[name=email]',
        INPsenhaCadastro: 'input#password-field',
        INPconfimaSenha: 'input#confirmPassword-field',
        INPcpf: 'input[name=cpf]',
        INPgenero: 'input[name=gender]',
        INPcelular: 'input[name=homePhone]',
        aceitarTermos: 'input#acceptedterms',
        BTNcriarConta: 'button[type=submit]'
        
    },

    Login:{
        INPemailLogin: 'input[name=login]',
        INPsenhaLogin: 'input[name=password]',
        BTNentrar: 'button[type=submit]',
        MSGemailOuCpfInvalido: 'p[class="MuiTypography-root MuiTypography-body2"]',
        MSGsenhaobrigatoria: 'p[class*=colorError]'
    }
}