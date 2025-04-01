import en from "./locales/en.json" with { type: "json" };
import pl from "./locales/pl.json" with { type: "json" };
import es from "./locales/es.json" with { type: "json" };
import de from "./locales/de.json" with { type: "json" };
import it from "./locales/it.json" with { type: "json" };
import pt from "./locales/pt.json" with { type: "json" };
import fr from "./locales/fr.json" with { type: "json" };
import ar from "./locales/ar.json" with { type: "json" };
import sr from "./locales/sr.json" with { type: "json" };
import sr_cyr from "./locales/sr_cyr.json" with { type: "json" };
import ja from "./locales/ja.json" with { type: "json" };
import ru from "./locales/ru.json" with { type: "json" };
import se from "./locales/se.json" with { type: "json" };

export const locales = {
  en,
  pl,
  es,
  de,
  it,
  pt,
  fr,
  ar,
  sr,
  sr_cyr,
  ja,
  ru,
  se,
};

export const supportedLanguages: string[] = Object.keys(locales);

export type AvailableLanguages = keyof typeof locales;

export const defaultLanguage: AvailableLanguages = "en";