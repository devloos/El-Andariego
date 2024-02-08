import os
from git import Repo


ANDARIEGO_VUE_PATH = '/Users/ca/Developer/Projects/El-Andariego/el-andariego-vue'
ANDARIEGO_API_PATH = '/Users/ca/Developer/Projects/El-Andariego/el-andariego-api'

BRANCH = 'main'

answer = input("Are you sure you want to deploy? (yes/no) [no]: ")

# anything but yes
if (answer != 'yes'):
    exit(0)

if (Repo(ANDARIEGO_VUE_PATH).active_branch.name != BRANCH):
    print(f"You are not on {BRANCH} for Andariego Vue! [FAILED]")
    exit(1)

if (Repo(ANDARIEGO_API_PATH).active_branch.name != BRANCH):
    print(f"You are not on {BRANCH} for Andariego API! [FAILED]")
    exit(1)

os.system('rm -rf dist')

# in el-andariego-vue
os.chdir(ANDARIEGO_VUE_PATH)
os.system(f"git pull origin {BRANCH}")
os.system('npm run build')

if int(os.popen('echo $?').read()) != 0:
    print('Error building Andariego Vue! [FAILED]')
    exit(1)

os.system(f"mv dist {ANDARIEGO_API_PATH}")

# in el-andariego-api
os.chdir(ANDARIEGO_API_PATH)
os.system('git add .')
os.system('git commit -m "deploy"')
os.system('git push')
os.system('railway up --detach')
