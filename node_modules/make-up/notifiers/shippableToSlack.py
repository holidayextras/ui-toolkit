import httplib, json
import getopt, sys, os
import subprocess

def get_data_from_git(format_string, commit):
  return subprocess.check_output(['git', 'log', '-1', '--format=format:%s' % format_string, commit])

def get_author(commit):
  return get_data_from_git('%an <%ae>', commit)

def get_date(commit):
  return get_data_from_git('%aD', commit)

def get_title(commit):
  return get_data_from_git('%s', commit)

def get_full_message(commit):
  return get_data_from_git('%b', commit)

def post_message(success):
  headers = {'Content-Type': 'application/json'}
  build_url = os.environ['BUILD_URL']
  build_number = os.environ['BUILD_NUMBER']
  branch = os.environ['BRANCH']
  commit = os.environ['COMMIT']
  project = os.environ['REPO_NAME']
  url = os.environ['SLACK_WEBHOOK']
  channel = os.getenv('SLACK_CHANNEL', '#general')

  status_text = 'succeeded' if success else 'failed'
  color = 'good' if success else 'danger'
  text = '<%s|Build #%s> %s for project %s on branch %s' % (build_url, build_number, status_text, project, branch)

  message = {
    'username': 'Shippable',
    'channel': channel,
    # 'icon_emoji': 'beer' if success else 'disappointed',
    'attachments': [{
      'pretext': text,
      'fallback': text,
      'color': color,
      'fields': [
        {
          'title': get_author(commit),
          'value': get_date(commit)
        },
        {
          'title': get_title(commit),
          'value': get_full_message(commit)
        }
      ]
    }]
  }

  connection = httplib.HTTPSConnection('hooks.slack.com')

  connection.request('POST', url, json.dumps(message), headers)
  response = connection.getresponse()
  print response.read().decode()

def main():
  try:
    opts, args = getopt.getopt(sys.argv[1:], ':sf')
  except getopt.GetoptError as err:
    print str(err)
    sys.exit(2)

  success = False
  for o, arg in opts:
    if o == '-s':
      success = True

  post_message(success)

if __name__ == '__main__':
  main()