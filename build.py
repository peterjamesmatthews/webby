"""
This script serves as a one-line solution for building webby. 
NOTE: A pyenv virtualenv named "webby" must be installed prior to building.
Currently python version 3.9.5 is supported. This can be verified by running
`python build.py --hello-world`
"""
import argparse


parser = argparse.ArgumentParser(description='Builds webby')
parser.add_argument('-d', '--development', help='Build webby for development.',
                    action='store_true')
parser.add_argument('-p', '--production', help='Build webby for production.',
                    action='store_true')
parser.add_argument('-r', '--run', help='Run webby off of current build.',
                    action='store_true')
parser.add_argument('-v', '--verify', help='Verify pyenv virtualenv.',
                    action='store_true')
parser.add_argument('-hw', '--hello-world', help='Print a' +
                    ' friendly message from webby.',action='store_true')


def verify_pyenv():
    pass

def build_dev():
    pass

def build_pro():
    pass

if __name__ == '__main__':
    args = parser.parse_args()
    if args.verify:
        verify_pyenv()
    if args.development:
        build_dev()
    elif args.production:
        build_pro()
    if args.hello_world:
        print('Hello world 👋, from webby!')
