# Controle de Validade

Abra `index.html` em um navegador com HTTPS para usar como PWA.

Recursos:
- cadastro de produto com 1 ou 2 datas de validade;
- a primeira data é obrigatória e a segunda é opcional;
- observação opcional;
- quando houver duas datas, a data mais próxima é usada para status, alertas e vencimento;
- produtos ficam armazenados até 1 dia depois do vencimento e são removidos automaticamente depois disso;
- quantidade de dias de antecedência configurável;
- indicadores de vencidos e próximos do vencimento;
- armazenamento local no dispositivo;
- pedido de permissão para notificações;
- service worker e manifest para instalação como app.

IMPORTANTE SOBRE NOTIFICAÇÕES:
Uma página web não consegue garantir, sozinha, que vai acordar todos os dias e enviar uma notificação quando estiver totalmente fechada. Para notificações push confiáveis com o site fechado, é necessário um serviço de push + servidor/backend. Esta versão verifica os alertas quando o app/site está aberto e usa notificações persistentes via service worker quando disponível.
