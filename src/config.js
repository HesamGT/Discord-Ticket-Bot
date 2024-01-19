import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "&",
  TOKEN: "token_here",
  ACTIVITY: { NAME: "Kos", TYPE: "PLAYING" },
  GUILD_ID: "server_id",
  TICKET: {
    CHANNEL: "channell_id",
    CATEGORY: "category_id",
    ARCHIVE_CATEGORY: "category_id",
    MESSAGE: "# برای دریافت رول (adult plus , admin request , mafia player , media , . . .) و اکسچنج و چیز های دیگه ، روی گزینه Open Ticket کلیک کنید!🕯",
    STAFF_ROLES: [],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "تایید تیکت",
        EMOTE: "<a:verify2:1197934357386637383>",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "جابه جایی تیکت به رسیدگی",
        EMOTE: "<a:gear:1197934339372101824>",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "حذف تیکت",
        EMOTE: "<:multipliedby:1197934158245269565>",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "name",
        LABEL: "موضوع تیکت",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 2,
        MAX_LENGTH: 20,
        PLACE_HOLDER: "کوتاه باشد",
        REQUIRED: true,
      },
      {
        ID: "age",
        LABEL: "توضیحات تیکت",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 5,
        MAX_LENGTH: 100,
        PLACE_HOLDER: "کامل باشد",
        REQUIRED: true,
      },
    ],
  },
};
