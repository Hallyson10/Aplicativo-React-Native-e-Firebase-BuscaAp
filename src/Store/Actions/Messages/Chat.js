import firebase from 'firebase';

export const SendMessage = (
  EmailUserRemetente,
  EmailUserDestinatario,
  nameUserRemetente,
  nameUserDestinatario,
  idadeUserRemetente,
  idadeUserDestinatario,
  fotoUserRemetente,
  fotoUserDestinario,
  mensage,
) => {
  firebase
    .database()
    .ref('Users/MyChat/')
    .child(EmailUserRemetente)
    .push()
    .set({
      EmailUserDestinatario,
      nameUserRemetente,
      nameUserDestinatario,
      idadeUserRemetente,
      idadeUserDestinatario,
      fotoUserRemetente,
      fotoUserDestinario,
      mensage,
    })
    .then(() => {
      firebase
        .database()
        .ref('Chat/')
        .push()
        .set({
          EmailUserDestinatario,
          nameUserRemetente,
          nameUserDestinatario,
          idadeUserRemetente,
          idadeUserDestinatario,
          fotoUserRemetente,
          fotoUserDestinario,
          mensage,
        });
    });
};
