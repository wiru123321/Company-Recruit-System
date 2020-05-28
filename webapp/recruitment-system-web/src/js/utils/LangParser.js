class LangParser {
  skillParser(arg) {
    let result = arg;
    switch (arg) {
      case "beginner":
        result = "początkujacy";
        break;
      case "intermediate":
        result = "średnio-zaawansowany";
        break;
      case "advanced":
        result = "zaawansowany";
        break;
      case "expert":
        result = "ekspert";
        break;
      default:
        break;
    }

    return result;
  }

  educationParser(arg) {
    let result = arg;
    switch (arg) {
      case "secondary": {
        result = "średnie";
        break;
      }
      case "vocational": {
        result = "zawodowe";
        break;
      }
      case "higher": {
        result = "wyższe";
        break;
      }
      default: {
        break;
      }
    }
    return result;
  }
}

export default new LangParser();
