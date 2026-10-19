# Casa da Cultura César Oliveira — projeto artístico

Website estático, responsivo e multipágina para apresentar a Casa da Cultura com uma identidade visual editorial, experimental e ligada às artes.

## Páginas
- `index.html` — homepage, manifesto, disciplinas artísticas e destaques.
- `programacao.html` — página de programação por áreas artísticas.
- `espacos.html` — visão, manifesto e valores da Casa.
- `contactos.html` — informações para planear uma visita.
- `styles.css` — identidade visual e layouts responsivos.
- `script.js` — navegação mobile e ano automático no rodapé.

## Como testar
Abre `index.html` num navegador. Não é necessário instalar dependências nem executar um processo de compilação. As fotografias e tipos de letra são carregados de serviços externos, por isso é necessária ligação à Internet.

## Publicar com GitHub Pages
1. Abre **Settings → Pages** neste repositório.
2. Em **Build and deployment**, escolhe **Deploy from a branch**.
3. Seleciona a branch `main` e a pasta `/(root)), depois carrega em **Save**.
4. Quando o GitHub terminar a publicação, o endereço esperado é https://geralkomunika.github.io/casa-da-cultura/

## Antes de publicar oficialmente
- Os eventos são exemplos de apresentação; substituir por datas, títulos e ligações confirmadas.
- Inserir morada, horários, contactos, bilheteira e informações de acessibilidade oficiais.
- Confirmar que todas as imagens remotas são adequadas e têm os direitos/licenças necessários; substituir por fotografias autorizadas da Casa quando possível.
- Atualizar textos e elementos de identidade com a equipa responsável.
- Esta proposta não altera nem substitui automaticamente o site Wix atual.

## Tecnologias
HTML5 semântico · CSS responsivo · JavaScript simples · Google Fonts · fotografias remotas.


## Programação e painel de administração

A aplicação Next.js usa a pasta `app/` e o `package.json` na raiz. No Vercel, define **Root Directory** como `./` e o framework como **Next.js**.

### Configuração de produção

No Supabase, executa o ficheiro `supabase/schema.sql` no SQL Editor. Além das tabelas de newsletter e contacto, este script cria `events` para a programação.

No Vercel → Settings → Environment Variables, configura:
- `NEXT_PUBLIC_SUPABASE_URL`: URL do projeto Supabase.
- `SUPABASE_SERVICE_ROLE_KEY`: chave secreta de servidor; nunca a publiques no cliente.
- `ADMIN_PASSWORD`: palavra-passe forte e única para proteger o painel em `/admin`.

Depois de criar ou alterar estas variáveis, faz redeploy. Abre `/admin` para criar eventos, definir datas e publicar/retirar eventos. A programação pública permite pesquisa e filtro por categoria. Os botões de bilheteira abrem a página oficial da Ticketline.

**Importante:** usa uma palavra-passe longa, não a partilhes e configura-a antes de disponibilizar `/admin` publicamente. Antes do lançamento, testa a autenticação, criação/edição/apagamento de eventos e os formulários com as credenciais reais do Supabase.
