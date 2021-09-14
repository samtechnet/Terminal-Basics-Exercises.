# Terminal-Basics-Exercises.
Terminal Basics Exercises.

1.  cd ~ mkdir first
2.  cd first
3. touch person.txt
4. mv person.txt another.txt
5. cp another.text copy.text
6. rm copy.text
7. cd ~
   cp -r first second
8. rm -rf second


Part 2 
1. man command is used to display the user manual of any comand that we can run on the terminal
Scroll using the up and down arrows. Get out using the 'q' button

2. -ls command use to give us more information about each file for ls,   -a is used to flag and list "all" files (including hidden files and folders).
3.  
4.  
5.  
6.  CTRL+Right arrow jumps the cursor forward to the next word while CTRL+Left arrow will move the cursor to the beginning of the previous word.
7.  To navigate to the beginning of the line in use: “CTRL+a”.

8.  To navigate to the end of the line in use: “CTRL+e”.
9.  CTRl+ u
10.  A terminal creates a Command Line Interface (CLI) to interact with the computer while a shell processes commands to give outputs
11.  An absolute path is one that begins from the root directory
12.  A relative path is one that does not begin from the root directory
13.  A Flag is use to change and even enhance commands and are added using a -( -l, -a)
14.  The 'r' and 'f' flags help to delete folders and every of the contents in them.


Part I (Permissions and links)
write terminal commands to do the following:

1. touch restricted.txt
2. chmod 600 restricted.txt
3. chmod a+rwx restricted.txt
4. mkdir secret_files, 
cd secret_files folder path 
touch first_secret.txt  
mkdir classified
cd into classified folder path
touch super_secret.txt

5.cd ~
   chmod -R 770 secret_files

6. ln restricted.txt hard_link
7. cd ~
   cd secret_files
   ln -s classified classified_link

Part II

echo lettuce > vegetables.txt
   echo Amaranth >> vegetables.txt
   echo Beet >> vegetables.txt
   echo Celery >> vegetables.txt
   echo Kale >> vegetables.txt
   echo Dill >> vegetables.txt
   echo Cabbage >> vegetables.txt
   echo Broccoli >> vegetables.txt
   echo lettuce >> vegetables.txt
   echo Amaranth >> vegetables.txt
   echo Beet >> vegetables.txt
   echo Celery >> vegetables.txt
   echo Kale >> vegetables.txt
   echo  Dill >> vegetables.txt
   echo  Cabbage >> vegetables.txt
   echo Broccoli >> vegetables.txt

1. Sort vegetables.txt
2. wc vegetables.txt
3. sort vegetables.txt | uniqe > vegetables_sorted.txt
4. sort vegetables.txt | uniqe > last_three.txt | sort | tail -n 3
5. sort vegetables.txt | uniqe > vegetables_sorted.txt | wc |grep broccoli
