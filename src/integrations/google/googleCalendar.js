
import Empresa from "../../models/Empresa.js";
import { google } from "googleapis";
import oauth2Client from "./googleAuth.js";

export async function criarEventoGoogle(
  empresaId,
  dadosEvento
) {

  const empresa =
    await Empresa.findById(
      empresaId
    );

  if (!empresa) {

    throw new Error(
      "Empresa não encontrada"
    );

  }

  if (
    !empresa.googleConnected
  ) {

    throw new Error(
      "Google Calendar não conectado"
    );

  }

  oauth2Client.setCredentials({

    refresh_token:
      empresa.googleRefreshToken

  });

  const calendar =
    google.calendar({

      version: "v3",

      auth: oauth2Client

    });

  const evento =
    await calendar.events.insert({

      calendarId:
        empresa.googleCalendarId,

      requestBody: {

        summary:
          dadosEvento.summary,

        description:
          dadosEvento.description,

        start: {
          dateTime:
            dadosEvento.start
        },

        end: {
          dateTime:
            dadosEvento.end
        }

      }

    });

  return evento.data;

}
