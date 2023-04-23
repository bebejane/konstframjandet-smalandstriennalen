import ContactForm from "../ContactForm";

export function newContactform() {
  return (
    <ContactForm
      fromEmail={'bjornthief@gmail.com'}
      fromName={'Björn Berglund'}
      subject={'This is the subject'}
      fields={[{
        title: 'Field one',
        value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      }, {
        title: 'Field two',
        value: 'Lorem Ipsum is simply dummy text of the printing'
      }, {
        title: 'Ladda upp din presentation som PDF',
        value: 'https://www.datocms-assets.com/55629/1671709126-1671111169-oxid-vagglampa-sv.pdf'
      }
      ]}
    />
  );
}
