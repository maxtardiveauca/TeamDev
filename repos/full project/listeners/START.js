// This is only a very generic example
var json = listenerUtil.restPost(
  'https://consul.rocks/v1/agent/members',
  {},
  {headers:
    {"X-Consul-Token": "abcd1234"}
  },
  {name: listenerUtil.getHostName()}
)
