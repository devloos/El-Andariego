import os
from git import Repo

ANDARIEGO_PROJECT_PATH = '/Users/ca/Developer/Projects/El-Andariego'

BRANCH = 'main'

answer = input("Are you sure you want to deploy? (yes/no) [no]: ")

# anything but yes
if (answer != 'yes'):
    exit(0)

if (Repo(ANDARIEGO_PROJECT_PATH).active_branch.name != BRANCH):
    print(f"You are not on {BRANCH} for Andariego Project! [FAILED]")
    exit(1)

# in el-andariego-vue
os.chdir(ANDARIEGO_PROJECT_PATH + '/client')
os.system('npm run build')

if int(os.popen('echo $?').read()) != 0:
    print('Error building Andariego Vue! [FAILED]')
    exit(1)

os.system(f"mv dist {ANDARIEGO_PROJECT_PATH + '/server'}")

os.chdir(ANDARIEGO_PROJECT_PATH)
os.system('git add .')
os.system('git commit -m "deploy"')
os.system('git push')

# in el-andariego-api
os.chdir(ANDARIEGO_PROJECT_PATH + '/server')
os.system('railway up --detach')
