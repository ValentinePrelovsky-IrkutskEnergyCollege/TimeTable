<?
class Parser
{	
	private $docName = "";
	
	public function __construct($documentName)
	{
		$this->docName = $documentName;
	}
	
	public function parseDocument()
	{
		echo "\n function <b>parse document</b> is called. Argument equals <b>".$this->docName."</b>";
	}
}
?>