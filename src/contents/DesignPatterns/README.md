# Design Parrerns

## Layout Patterns

- consiste em fazer com que todo o controle de layout, posicionamento dos components, seja definido por componentes de layout, fazendo com que os componentes de verdade não necessitem se preocupar com seu posicionamento.

exemplo: Podemos ter um componente me menu lateral chamado MenuLateral. Ele sera composto apenas pelos itens desse menu e teremos um outro componente chamado LayoutMenuLateral que será responsável pelo posicionamento desse menu no sistema. dessa forma o conteúdo do menu estará isolado do posicionamento e poderá ser modificado ou trocado mais facilmente.

exemplo de layout patterns:

- split screen:
divide a tela em zonas que receberão os components. Pode dividir em esquerda e direita, cima e baixo ou outras disposições.

- List:
Apresenta uma lista de algo, seja card, imagens, informações.

- Modais:

## Container Components

- consistem em components responsável por carregar dados que serão disponibilizados para os filhos, dessa forma, os components filhos não precisam saber da onde os dados vem, apenas recebem os dados. É importante não usar esse pattern para passar informação para todos os filhos, pois isso pode afetar a rastreabilidade e atrapalhar em futuras manutenções.