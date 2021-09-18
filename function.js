// API Request
// https://onesimpleapi.com/docs/image-info
//
// https://onesimpleapi.com/api/image_info?token=YOUR_TOKEN_GOES_HERE&output=json&url=https://github.com/ianare/exif-samples/blob/master/jpg/gps/DSCN0010.jpg?raw=true

let cache = new Map();

window.function = async function (url, token) {
  if (url == undefined) return;
  if (token == undefined) return;

  url = url.value ?? "";
  token = token.value ?? "";

  let ret = cache.get(url);

  if (ret === undefined && url != "" && token != "") {
    /*
    try {
    const data = await fetch(
      `https://onesimpleapi.com/api/image_info?token=${token}&output=json&url=${url}?raw=true`
    );

    const json = await data.json();
    ret = json.date;
    cache.set(url, ret);

    console.log(url);
    console.log(json);
  } catch (e) {
    console.log(url);
    console.log("ERROR");
    ret = "error";
  }
  //}

  return ret;
  */
    let json = await fetch(
      `https://onesimpleapi.com/api/image_info?token=${token}&output=json&url=${url}?raw=true`
    ).then((x) => x.json());

    ret = JSON.stringify(json);

    cache.set(url, ret);
  }
  //if (query.value !== undefined) {
  //  json = jq.json(json, query.value);
  //}

  return ret;
};
