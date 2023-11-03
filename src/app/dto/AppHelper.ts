export class FunctionHelper {

  public static stripTags(html: string, args: any[] = ['b', 'i', 'u', 'span', 'strong']) {
    // Strip all except basic formatting;
    return html.replace(/<(\/?)(\w+)[^>]*\/?>/g, (_, endMark, tag) => {
      return args.includes(tag) ? '<' + endMark + tag + '>' : '';
    }).replace(/<!--.*?-->/g, '');
  }

}
