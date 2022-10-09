const BASE_URL = "https://mapi.harmoney.dev";
const TOKEN = "bVWXcC-wYkuJAFes";

export async function msgList() {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/messages/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${TOKEN}`,
      },
    });
    if (res.status < 300 && res.status >= 200) {
      const body = await res.json();
      return body;
    } else {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.log("error = ", error);
  }
}

export async function postMsg(val) {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/messages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${TOKEN}`,
      },
      body: JSON.stringify({ text: val }),
    });
    if (res.status < 300 && res.status >= 200) {
      const body = await res.json();
      return body;
    } else {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.log("error = ", error);
  }
}

export async function deleteMsg(msgId) {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/messages/${msgId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${TOKEN}`,
      },
    });
    if (res.status < 300 && res.status >= 200) {
      const body = await res.json();
      return body;
    } else {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.log("error = ", error);
  }
}
