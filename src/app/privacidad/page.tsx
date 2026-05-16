import { Container } from "@/components/Container/Container";
import styles from "./page.module.css";

export const metadata = { title: "Aviso de Privacidad — HSE Solutions" };

export default function PrivacidadPage() {
  return (
    <Container>
      <section className={styles.section}>
        <h1 className={styles.title}>Aviso de Privacidad</h1>
        <p className={styles.updated}>Última actualización: Marzo 2026</p>

        <p>
          <strong>RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES </strong>
          De conformidad con lo dispuesto en la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares (LFPDPPP), <strong>Martín Conde</strong>, con domicilio en{" "}
          <strong>Av. Valle de San Isidro 944 Fracc. Mirador San Isidro, Zapopan, Jalisco C.P. 45133</strong>,
          es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su
          protección.{" "}
          Puede contactarnos directamente al correo electrónico{" "}
          <a href="mailto:martin.condeca@yahoo.com">martin.condeca@yahoo.com</a> o al teléfono{" "}
          <a href="tel:3311961280">33 1196 1280</a>.
        </p>

        <p>
          <strong>DATOS PERSONALES QUE RECABAMOS </strong>
          Para llevar a cabo las finalidades descritas en el presente aviso de privacidad,
          recabaremos los siguientes datos personales:
        </p>
        <ul className={styles.list}>
          <li>Nombre completo.</li>
          <li>Correo electrónico.</li>
          <li>Teléfono (fijo o celular).</li>
          <li>Nombre de la empresa para la que labora y puesto.</li>
          <li>Datos fiscales para facturación (RFC, domicilio fiscal, régimen), en caso de contratación de servicios.</li>
        </ul>
        <p>No recabamos datos personales sensibles para la prestación de nuestros servicios a través de este sitio web.</p>

        <p>
          <strong>FINALIDADES DEL TRATAMIENTO DE DATOS </strong>
          Los datos personales que recabamos de usted los utilizaremos para las siguientes
          finalidades primarias, que son necesarias para el servicio que solicita:
        </p>
        <ul className={styles.list}>
          <li>Contacto y atención: Responder a sus mensajes, dudas o solicitudes de información enviadas a través de nuestro formulario de contacto.</li>
          <li>Gestión de citas: Agendar, coordinar y confirmar reuniones, consultorías o asesorías a través de nuestra plataforma de agendamiento.</li>
          <li>Prestación de servicios: Proveer los servicios de consultoría, peritaje, capacitación y gestoría en materia de Salud, Seguridad y Medio Ambiente (HSE).</li>
          <li>Administración y facturación: Creación de su perfil como cliente, envío de cotizaciones y emisión de comprobantes fiscales.</li>
        </ul>
        <p>De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias (opcionales):</p>
        <ul className={styles.list}>
          <li>
            Envío de actualizaciones normativas, boletines informativos o promociones sobre nuestros servicios.
            (Si el usuario no desea que sus datos se usen para estos fines secundarios, puede indicarlo enviando
            un correo a <a href="mailto:martin.condeca@yahoo.com">martin.condeca@yahoo.com</a>.)
          </li>
        </ul>

        <p>
          <strong>USO DE HERRAMIENTAS DE TERCEROS Y COOKIES </strong>
          Le informamos que en nuestra página web utilizamos cookies, web beacons y otras tecnologías para
          monitorear su comportamiento como usuario de internet y brindarle un mejor servicio. Así mismo,
          para la gestión de citas utilizamos la plataforma de terceros <strong>Calendly</strong>, la cual
          recopila su nombre y correo electrónico bajo sus propios estándares de seguridad para coordinar
          la reunión en nuestro calendario. Los datos ingresados en esta plataforma son utilizados
          exclusivamente para el fin de agendar y notificarle sobre su cita.
        </p>

        <p>
          <strong>TRANSFERENCIA DE DATOS PERSONALES </strong>
          Le informamos que sus datos personales no serán compartidos, vendidos ni transferidos a terceros
          con fines comerciales o de publicidad. Sus datos solo podrán ser transferidos a los diversos entes
          privados o gubernamentales (como STPS, CENAPRED, ema o el Poder Judicial) de manera estricta y
          únicamente cuando sea necesario para la gestión de trámites, registros o peritajes que usted haya
          contratado y autorizado previamente con nosotros, cumpliendo en todo momento con la legalidad vigente.
        </p>

        <p>
          <strong>MEDIOS PARA EJERCER SUS DERECHOS ARCO </strong>
          Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las
          condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su
          información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación);
          que la eliminemos de nuestros registros o bases de datos (Cancelación); así como oponerse al uso de
          sus datos personales para fines específicos (Oposición).
        </p>
        <p>
          Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud
          respectiva enviando un correo electrónico a{" "}
          <a href="mailto:martin.condeca@yahoo.com">martin.condeca@yahoo.com</a>, especificando su nombre,
          el derecho que desea ejercer y un documento que acredite su identidad. En un plazo máximo de 20
          días hábiles atenderemos su solicitud y le informaremos sobre la procedencia de la misma.
        </p>

        <p>
          <strong>MODIFICACIONES AL AVISO DE PRIVACIDAD </strong>
          Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al
          presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o
          nuevos requerimientos para la prestación de nuestros servicios. Estas modificaciones estarán
          disponibles al público a través de nuestra página web{" "}
          <a href="https://www.hsesolutions.mx" target="_blank" rel="noopener noreferrer">
            <strong>www.hsesolutions.mx</strong>
          </a>.
        </p>

        <p className={styles.fecha}><strong>Fecha de última actualización: 26/03/2026</strong></p>
      </section>
    </Container>
  );
}
