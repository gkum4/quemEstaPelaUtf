import monthNames from '../../Utils/monthNames';

const getFormattedDate = dateString => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? '0' + day : `${day}`;
  const formattedMonth = month < 10 ? '0' + month : `${month}`;

  return formattedDay + '/' + formattedMonth + '/' + year;
};

const generateUsersListHtml = (usersList = []) => {
  const actualDate = new Date();

  const day = actualDate.getDate();
  const month = monthNames[actualDate.getMonth()];
  const year = actualDate.getFullYear();

  const unformattedHour = actualDate.getHours();
  const hour = unformattedHour < 10 ? '0' + unformattedHour : unformattedHour;

  const unformattedMinute = actualDate.getMinutes();
  const minute = unformattedMinute < 10 ? '0' + unformattedMinute : unformattedMinute;

  const htmlString = `
    <div>
      <h1>Lista de usuários cadastrados no banco de dados</h1>
      
      ${usersList
        .map(
          user => `
        <div style="margin-bottom: 40px">
          <strong>${user.username}</strong>
          <p>Conta criada em ${getFormattedDate(user.createdAt)}</p>
        </div>
      `,
        )
        .join('\n')}

      <div style="margin-top: 30px"/>

      <span>Arquivo gerado em: ${day}, de ${month}, ${year} - ${hour}:${minute}</span>
    </div>
  `;

  return htmlString;
};

export default generateUsersListHtml;
