<?php
header('Content-Type: application/xml;charset=utf-8');

echo 
'<?xml version="1.0" encoding="utf-8"?>
<entry xml:base="http://test.bitrix.dev10.spellabs.com:8080/_api/" xmlns="http://www.w3.org/2005/Atom" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xmlns:georss="http://www.georss.org/georss" xmlns:gml="http://www.opengis.net/gml" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata">
	<id>http://test.bitrix.dev10.spellabs.com:8080/_api/Web</id>
	<category scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme" term="SP.Web"/>
	<link href="Web" rel="edit"/>
	<link href="Web/FirstUniqueAncestorSecurableObject" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/FirstUniqueAncestorSecurableObject" title="FirstUniqueAncestorSecurableObject" type="application/atom+xml;type=entry"/>
	<link href="Web/RoleAssignments" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleAssignments" title="RoleAssignments" type="application/atom+xml;type=feed"/>
	<link href="Web/Activities" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Activities" title="Activities" type="application/atom+xml;type=feed"/>
	<link href="Web/ActivityLogger" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/ActivityLogger" title="ActivityLogger" type="application/atom+xml;type=entry"/>
	<link href="Web/Alerts" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Alerts" title="Alerts" type="application/atom+xml;type=feed"/>
	<link href="Web/AllProperties" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/AllProperties" title="AllProperties" type="application/atom+xml;type=entry"/>
	<link href="Web/AppTiles" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/AppTiles" title="AppTiles" type="application/atom+xml;type=feed"/>
	<link href="Web/AssociatedMemberGroup" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/AssociatedMemberGroup" title="AssociatedMemberGroup" type="application/atom+xml;type=entry"/>
	<link href="Web/AssociatedOwnerGroup" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/AssociatedOwnerGroup" title="AssociatedOwnerGroup" type="application/atom+xml;type=entry"/>
	<link href="Web/AssociatedVisitorGroup" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/AssociatedVisitorGroup" title="AssociatedVisitorGroup" type="application/atom+xml;type=entry"/>
	<link href="Web/Author" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Author" title="Author" type="application/atom+xml;type=entry"/>
	<link href="Web/AvailableContentTypes" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/AvailableContentTypes" title="AvailableContentTypes" type="application/atom+xml;type=feed"/>
	<link href="Web/AvailableFields" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/AvailableFields" title="AvailableFields" type="application/atom+xml;type=feed"/>
	<link href="Web/ClientWebParts" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/ClientWebParts" title="ClientWebParts" type="application/atom+xml;type=feed"/>
	<link href="Web/ContentTypes" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/ContentTypes" title="ContentTypes" type="application/atom+xml;type=feed"/>
	<link href="Web/CurrentUser" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/CurrentUser" title="CurrentUser" type="application/atom+xml;type=entry"/>
	<link href="Web/DataLeakagePreventionStatusInfo" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/DataLeakagePreventionStatusInfo" title="DataLeakagePreventionStatusInfo" type="application/atom+xml;type=entry"/>
	<link href="Web/DescriptionResource" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/DescriptionResource" title="DescriptionResource" type="application/atom+xml;type=entry"/>
	<link href="Web/EventReceivers" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/EventReceivers" title="EventReceivers" type="application/atom+xml;type=feed"/>
	<link href="Web/Features" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Features" title="Features" type="application/atom+xml;type=feed"/>
	<link href="Web/Fields" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Fields" title="Fields" type="application/atom+xml;type=feed"/>
	<link href="Web/Folders" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Folders" title="Folders" type="application/atom+xml;type=feed"/>
	<link href="Web/HostedApps" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/HostedApps" title="HostedApps" type="application/atom+xml;type=entry"/>
	<link href="Web/Lists" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Lists" title="Lists" type="application/atom+xml;type=feed"/>
	<link href="Web/ListTemplates" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/ListTemplates" title="ListTemplates" type="application/atom+xml;type=feed"/>
	<link href="Web/Navigation" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Navigation" title="Navigation" type="application/atom+xml;type=entry"/>
	<link href="Web/OneDriveSharedItems" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/OneDriveSharedItems" title="OneDriveSharedItems" type="application/atom+xml;type=feed"/>
	<link href="Web/ParentWeb" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/ParentWeb" title="ParentWeb" type="application/atom+xml;type=entry"/>
	<link href="Web/PushNotificationSubscribers" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/PushNotificationSubscribers" title="PushNotificationSubscribers" type="application/atom+xml;type=feed"/>
	<link href="Web/RecycleBin" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/RecycleBin" title="RecycleBin" type="application/atom+xml;type=feed"/>
	<link href="Web/RegionalSettings" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/RegionalSettings" title="RegionalSettings" type="application/atom+xml;type=entry"/>
	<link href="Web/RoleDefinitions" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/RoleDefinitions" title="RoleDefinitions" type="application/atom+xml;type=feed"/>
	<link href="Web/RootFolder" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/RootFolder" title="RootFolder" type="application/atom+xml;type=entry"/>
	<link href="Web/SiteCollectionAppCatalog" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/SiteCollectionAppCatalog" title="SiteCollectionAppCatalog" type="application/atom+xml;type=entry"/>
	<link href="Web/SiteGroups" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/SiteGroups" title="SiteGroups" type="application/atom+xml;type=feed"/>
	<link href="Web/SiteUserInfoList" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/SiteUserInfoList" title="SiteUserInfoList" type="application/atom+xml;type=entry"/>
	<link href="Web/SiteUsers" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/SiteUsers" title="SiteUsers" type="application/atom+xml;type=feed"/>
	<link href="Web/TenantAppCatalog" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/TenantAppCatalog" title="TenantAppCatalog" type="application/atom+xml;type=entry"/>
	<link href="Web/ThemeInfo" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/ThemeInfo" title="ThemeInfo" type="application/atom+xml;type=entry"/>
	<link href="Web/TitleResource" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/TitleResource" title="TitleResource" type="application/atom+xml;type=entry"/>
	<link href="Web/UserCustomActions" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/UserCustomActions" title="UserCustomActions" type="application/atom+xml;type=feed"/>
	<link href="Web/Webs" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/Webs" title="Webs" type="application/atom+xml;type=feed"/>
	<link href="Web/WebInfos" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/WebInfos" title="WebInfos" type="application/atom+xml;type=feed"/>
	<link href="Web/WorkflowAssociations" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/WorkflowAssociations" title="WorkflowAssociations" type="application/atom+xml;type=feed"/>
	<link href="Web/WorkflowTemplates" rel="http://schemas.microsoft.com/ado/2007/08/dataservices/related/WorkflowTemplates" title="WorkflowTemplates" type="application/atom+xml;type=feed"/>
	<title/>
	<updated>2019-04-23T07:29:45Z</updated>
	<author>
		<name/>
	</author>
	<content type="application/xml">
		<m:properties>
			<d:AllowRssFeeds m:type="Edm.Boolean">true</d:AllowRssFeeds>
			<d:AlternateCssUrl/>
			<d:AppInstanceId m:type="Edm.Guid">00000000-0000-0000-0000-000000000000</d:AppInstanceId>
			<d:Configuration m:type="Edm.Int16">0</d:Configuration>
			<d:Created m:type="Edm.DateTime">2018-11-15T13:12:54.457</d:Created>
			<d:CurrentChangeToken m:type="SP.ChangeToken">
				<d:StringValue>1;2;a693a584-c9c7-4a29-ae61-daea49a56ab1;636916013853730000;265654192</d:StringValue>
			</d:CurrentChangeToken>
			<d:CustomMasterUrl>/sites/translom/_catalogs/masterpage/spellabs-portal.master</d:CustomMasterUrl>
			<d:Description/>
			<d:DesignPackageId m:type="Edm.Guid">00000000-0000-0000-0000-000000000000</d:DesignPackageId>
			<d:DocumentLibraryCalloutOfficeWebAppPreviewersDisabled m:type="Edm.Boolean">false</d:DocumentLibraryCalloutOfficeWebAppPreviewersDisabled>
			<d:EnableMinimalDownload m:type="Edm.Boolean">false</d:EnableMinimalDownload>
			<d:FooterEnabled m:type="Edm.Boolean">false</d:FooterEnabled>
			<d:HeaderEmphasis m:type="Edm.Int32">0</d:HeaderEmphasis>
			<d:HeaderLayout m:type="Edm.Int32">0</d:HeaderLayout>
			<d:HorizontalQuickLaunch m:type="Edm.Boolean">false</d:HorizontalQuickLaunch>
			<d:Id m:type="Edm.Guid">a693a584-c9c7-4a29-ae61-daea49a56ab1</d:Id>
			<d:IsMultilingual m:type="Edm.Boolean">false</d:IsMultilingual>
			<d:Language m:type="Edm.Int32">1049</d:Language>
			<d:LastItemModifiedDate m:type="Edm.DateTime">2019-04-23T07:12:48Z</d:LastItemModifiedDate>
			<d:LastItemUserModifiedDate m:type="Edm.DateTime">2019-04-23T07:12:48Z</d:LastItemUserModifiedDate>
			<d:MasterUrl>/sites/translom/_catalogs/masterpage/spellabs-system.master</d:MasterUrl>
			<d:MegaMenuEnabled m:type="Edm.Boolean">false</d:MegaMenuEnabled>
			<d:NoCrawl m:type="Edm.Boolean">false</d:NoCrawl>
			<d:ObjectCacheEnabled m:type="Edm.Boolean">false</d:ObjectCacheEnabled>
			<d:OverwriteTranslationsOnChange m:type="Edm.Boolean">false</d:OverwriteTranslationsOnChange>
			<d:ResourcePath m:type="SP.ResourcePath">
				<d:DecodedUrl>http://test.bitrix.dev10.spellabs.com:8080</d:DecodedUrl>
			</d:ResourcePath>
			<d:QuickLaunchEnabled m:type="Edm.Boolean">true</d:QuickLaunchEnabled>
			<d:RecycleBinEnabled m:type="Edm.Boolean">true</d:RecycleBinEnabled>
			<d:SearchScope m:type="Edm.Int32">0</d:SearchScope>
			<d:ServerRelativeUrl>/</d:ServerRelativeUrl>
			<d:SiteLogoUrl m:null="true"/>
			<d:SyndicationEnabled m:type="Edm.Boolean">true</d:SyndicationEnabled>
			<d:Title>Транслом</d:Title>
			<d:TreeViewEnabled m:type="Edm.Boolean">false</d:TreeViewEnabled>
			<d:UIVersion m:type="Edm.Int32">15</d:UIVersion>
			<d:UIVersionConfigurationEnabled m:type="Edm.Boolean">false</d:UIVersionConfigurationEnabled>
			<d:Url>http://test.bitrix.dev10.spellabs.com:8080</d:Url>
			<d:WebTemplate>STS</d:WebTemplate>
			<d:WelcomePage>PortalPages/home.aspx</d:WelcomePage>
		</m:properties>
	</content>
</entry>';