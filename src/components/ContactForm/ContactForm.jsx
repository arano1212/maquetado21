import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.8)', // Fondo oscuro como el de la imagen
        color: 'white',
      }}
    >
      <form
        onSubmit={sendEmail}
        style={{
          background: 'black',
          padding: '2rem',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <div className="field">
          <label className="label" style={{ color: 'white' }}>
            Nombre
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Escribe tu nombre completo"
              required
              style={{ width: '100%', marginBottom: '1rem' }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" style={{ color: 'white' }}>
            Correo electrónico
          </label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Escribe tu dirección de correo electrónico"
              required
              style={{ width: '100%', marginBottom: '1rem' }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" style={{ color: 'white' }}>
            Número de teléfono
          </label>
          <div className="control">
            <input
              className="input"
              type="tel"
              name="phone"
              placeholder="Escribe tu número telefónico"
              required
              style={{ width: '100%', marginBottom: '1rem' }}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" style={{ color: 'white' }}>
            Etiqueta
          </label>
          <div className="control">
            <select
              name="label"
              className="input"
              required
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              <option value="">Seleccionar</option>
              <option value="Consulta">opcion1</option>
              <option value="Feedback">opcion2</option>
              <option value="Otro">opcion3</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label" style={{ color: 'white' }}>
            Información adicional
          </label>
          <div className="control">
            <textarea
              className="textarea"
              name="additionalInfo"
              placeholder="Llena este campo con información que consideres de relevancia."
              style={{ width: '100%', marginBottom: '1rem' }}
            ></textarea>
          </div>
        </div>

        <div className="field">
          <label className="checkbox" style={{ color: 'white', marginBottom: '1rem' }}>
            <input type="checkbox" required style={{ marginRight: '0.5rem' }} />
            Confirmo que he leído las <a href="#">políticas de privacidad</a> del sitio.
          </label>
        </div>

        <div className="control">
          <button
            type="submit"
            className="button"
            style={{
              width: '100%',
              backgroundColor: '#1E90FF',
              color: 'white',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
